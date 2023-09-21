const contacts = require("../models/contacts");
// const Joi = require("joi");
const { HttpError, ctrlWrapper } = require("../helpers");

// const addShema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().required(),
//   phone: Joi.string().required(),
// });

const getAll = async (req, res) => {
  const result = await contacts.listContacts();
  res.status(200).json({
    status: "success",
    code: 200,
    data: { result },
    // message: "template message",
  });
};
const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.getContactById(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({
    status: "success",
    code: 200,
    data: { result },
  });
};
const add = async (req, res) => {
  const result = contacts.addContact(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: { result },
  });
};
const deleteById = async (req, res) => {
  const { contactId } = req.params;
  const result = contacts.removeContact(contactId, req.body);
  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json({ message: "contact deleted" });
};
const updateById = async (req, res) => {
  const { contactId } = req.params;
  const result = contacts.updateContactsById(contactId, req.body);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({
    status: "success",
    code: 200,
    data: { result },
  });
};
module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  deleteById: ctrlWrapper(deleteById),
  updateById: ctrlWrapper(updateById),
};
