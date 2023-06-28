// build your `Task` model here
const db = require("../../data/dbConfig");

function find() {
  return db("tasks as ts")
    .join("projects as pj", "ts.project_id", "pj.project_id")
    .select("ts.*", "pj.project_name", "pj.project_description");
}

module.exports = {
  find,
};
