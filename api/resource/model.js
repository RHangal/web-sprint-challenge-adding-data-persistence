// build your `Resource` model here
const db = require("../../data/dbConfig");

function find() {
  return db("resources");
}

function getName(resource_name) {
  return db("resources").where("resource_name", resource_name.trim()).first();
}

function addResource(resource_name, resource) {
  return db("resources")
    .insert({ ...resource })
    .then(() => {
      return getName(resource_name);
    });
}

module.exports = {
  find,
  getName,
  addResource,
};
