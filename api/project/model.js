// build your `Project` model here
const db = require("../../data/dbConfig");

function find() {
  return db("projects");
}

function getName(project_name) {
  return db("projects").where("project_name", project_name.trim()).first();
}

function addProject(project_name, project) {
  return db("projects")
    .insert({ ...project })
    .then(() => {
      return getName(project_name);
    });
}

module.exports = {
  find,
  getName,
  addProject,
};
