const contacts = require("../models/contacts");
const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
  const result = await contacts.listContacts();
  res.status(200).json({
    status: "success",
    code: 200,
    data: { result },
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
  const result = await contacts.addContact(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: result,
  });
};

const deleteById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);

  if (!result) {
    HttpError(404, "Not found");
  }
  res.json({ message: "contact deleted" });
};

const updateById = async (req, res) => {
  const { contactId } = req.params;

  const result = await contacts.updateContactsById(contactId, req.body);
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
