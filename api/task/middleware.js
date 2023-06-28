const db = require("../../data/dbConfig");

function getProjectByID(project_id) {
  return db("projects").where("project_id", project_id).first();
}

exports.checkProjectIdExists = async (req, res, next) => {
  try {
    const existing = await getProjectByID(req.body.project_name);
    if (!existing) {
      next({ status: 400, message: "that resource name is taken" });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

exports.validateTask = (req, res, next) => {
  const { task_description, project_id } = req.body;

  if (
    task_description === undefined ||
    typeof task_description !== "string" ||
    !task_description.trim() ||
    typeof project_id !== "number" ||
    project_id < 1
  ) {
    const error = { status: 400, message: "invalid step" };
    next(error);
  } else {
    next();
  }
};
