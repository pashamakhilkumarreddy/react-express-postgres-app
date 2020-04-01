const router = require('express').Router();

const { TodosControllers } = require('../controllers');

router.post('/todos', TodosControllers.postTodo);

router.put('/todos/:id', TodosControllers.updateTodo);

router.get('/todos', TodosControllers.getTodos);

router.get('/todos/:id', TodosControllers.getTodo);

router.delete('/todos/:id', TodosControllers.deleteTodo);

module.exports = router;
