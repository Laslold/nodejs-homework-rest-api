const express = require("express");
// const contacts = require("../../models/contacts.js");
// const Joi = require("joi");
// const { HttpError } = require("../../helpers");
const router = express.Router();
// const addShema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().required(),
//   phone: Joi.string().required(),
// });
const { validateBody } = require("../../middlewares");
const schema = require("../../schemas/contacts");
const ctrl = require("../../controllers/contacts");
router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", validateBody(schema.addSchema), ctrl.add);

router.delete("/:contactId", ctrl.deleteById);

router.put("/:contactId", validateBody(schema.addSchema), ctrl.updateById);

module.exports = router;
