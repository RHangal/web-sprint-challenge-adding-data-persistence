exports.validateProjectName = (req, res, next) => {
  const { project_name } = req.body;
  if (
    project_name === undefined ||
    typeof project_name !== "string" ||
    !project_name.trim()
  ) {
    next({ status: 400, message: "invalid scheme_name" });
  } else {
    next();
  }
};
