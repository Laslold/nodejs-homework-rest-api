const express = require("express");
const router = express.Router();
// const { ctrlWrapper } = require("../../helpers");
const { validateBody, isValid, authenticate } = require("../../middlewares");
const { schema } = require("../../models/contact");
const ctrl = require("../../controllers/contacts");

router.get("/", authenticate, ctrl.getAll);
router.post("/", authenticate, validateBody(schema.addSchema), ctrl.add);

router.get("/:contactId", authenticate, isValid.isValidId, ctrl.getById);
router.delete("/:contactId", authenticate, isValid.isValidId, ctrl.deleteById);
router.put(
  "/:contactId",
  authenticate,
  isValid.isValidId,
  validateBody(schema.updateSchema),
  ctrl.updateById
);
router.patch(
  "/:contactId/favorite",
  authenticate,
  isValid.isValidFavorite,
  validateBody(schema.updateFavoriteSchema),
  ctrl.updateFavorite
);

module.exports = router;
