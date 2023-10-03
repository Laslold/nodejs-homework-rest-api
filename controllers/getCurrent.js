// const { User } = require("../models/user");
const getCurrent = async (req, res, next) => {
  const { subscription, email } = req.user;
  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      user: {
        email,
        subscription,
      },
    },
  });
};
module.exports = getCurrent;
