const router = require('express').Router({mergeParams: true});
const taskService = require("./tasks.service");

router.route('/').get(async (req, res) => {
  const tasks = await taskService.getAllTasks(req.params.id);
  res.json(tasks);
});

router.route('/:taskId').get(async (req, res) => {
  const task = await taskService.getTask(req.params.id, req.params.taskId);
  res.status(task ? 200 : 404).json(task);
});

router.route('/').post(async (req, res) => {
  const task = await taskService.saveTask(req.params.id, req.body);
  res.status(task? 201 : 400).json(task);
});

router.route('/:taskId').put(async (req, res) => {
  const task = await taskService.updateTask(req.params.id, req.params.taskId, req.body);
  res.json(task);
});

router.route('/:taskId').delete(async (req, res) => {
  await taskService.deleteTask(req.params.id, req.params.taskId);
  res.status(204).json('The user has been deleted');
});

module.exports = router;
