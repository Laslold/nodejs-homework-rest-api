const express = require("express");

const { authenticate, validateBody } = require("../../middlewares");

const ctrl = require("../../controllers/getCurrent");
const { schemas } = require("../../models/user");
const updateSubscribe = require("../../controllers/updateSubscribe");
const router = express.Router();
router.get("/current", authenticate, ctrl);
// *****************
router.patch(
  "/subscription",
  authenticate,
  validateBody(schemas.updateSubscribeSchema),

  updateSubscribe
);
// *****************

module.exports = router;
