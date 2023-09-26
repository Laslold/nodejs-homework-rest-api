const express = require("express");
const router = express.Router();
const { ctrlWrapper } = require("../../helpers");
const { validateBody, isValid } = require("../../middlewares");
const { schema } = require("../../models/contact");
const ctrl = require("../../controllers/contacts");

router.get("/", ctrlWrapper(ctrl.getAll));
router.post("/", validateBody(schema.addSchema), ctrlWrapper(ctrl.add));

router.get("/:contactId", isValid.isValidId, ctrlWrapper(ctrl.getById));
router.delete("/:contactId", isValid.isValidId, ctrlWrapper(ctrl.deleteById));
router.put(
  "/:contactId",
  isValid.isValidId,
  validateBody(schema.updateSchema),
  ctrlWrapper(ctrl.updateById)
);
router.patch(
  "/:contactId/favorite",
  isValid.isValidFavorite,
  validateBody(schema.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateFavorite)
);
module.exports = router;
