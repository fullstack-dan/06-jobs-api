const express = require("express");
const router = express.Router();

const {
  getAllProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projects");

router.route("/").get(getAllProjects).post(createProject);
router.route("/:id").get(getProject).patch(updateProject).delete(deleteProject);

module.exports = router;
