const { User } = require("../models/user");
const updateSubscribe = async (req, res, next) => {
  try {
    const { subscription } = req.body;
    const { _id } = req.user;

    await User.findByIdAndUpdate(_id, { subscription });
    res.json({
      status: "success",
      code: 200,
      data: {
        user: {
          subscription,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};
module.exports = updateSubscribe;
