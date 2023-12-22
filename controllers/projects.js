const Project = require("../models/Project");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllProjects = async (req, res) => {
  res.send("get all projects");
};

const getProject = async (req, res) => {
  res.send("get project");
};

const createProject = async (req, res) => {
  const job = await Project.create({ ...req.body, createdBy: req.user.userId });
  res.status(StatusCodes.CREATED).json({ job });
};

const updateProject = async (req, res) => {
  res.send("update project");
};

const deleteProject = async (req, res) => {
  res.send("delete project");
};

module.exports = {
  getAllProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
};
