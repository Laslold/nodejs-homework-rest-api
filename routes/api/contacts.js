const express = require("express");
const router = express.Router();
const { ctrlWrapper } = require("../../helpers");
const { validateBody } = require("../../middlewares");
const schema = require("../../schemas/contacts");
const ctrl = require("../../controllers/contacts");

router.get("/", ctrlWrapper(ctrl.getAll));
router.post("/", validateBody(schema.addSchema), ctrlWrapper(ctrl.add));

router.get("/:contactId", ctrlWrapper(ctrl.getById));
router.delete("/:contactId", ctrlWrapper(ctrl.deleteById));
router.put(
  "/:contactId",
  validateBody(schema.updateSchema),
  ctrlWrapper(ctrl.updateById)
);

module.exports = router;
