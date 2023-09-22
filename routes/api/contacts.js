const express = require("express");
const router = express.Router();

const { validateBody } = require("../../middlewares");
const schema = require("../../schemas/contacts");
const ctrl = require("../../controllers/contacts");

router.get("/", ctrl.getAll);
router.post("/", validateBody(schema.addSchema), ctrl.add);

router.get("/:contactId", ctrl.getById);
router.delete("/:contactId", ctrl.deleteById);
router.put("/:contactId", validateBody(schema.addSchema), ctrl.updateById);

module.exports = router;
