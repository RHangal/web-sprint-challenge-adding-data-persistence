const Resources = require("./model");

exports.checkResourceNameUnique = async (req, res, next) => {
  try {
    const existing = await Resources.getName(req.body.resource_name);
    if (existing) {
      next({ status: 400, message: "that resource name is taken" });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};
