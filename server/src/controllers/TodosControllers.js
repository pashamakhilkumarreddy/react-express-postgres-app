const pool = require('../db');

module.exports = {
  async postTodo(req, res) {
    try {
      const {
        description,
      } = req.body;
      const newTodo = await pool.query(
        'INSERT INTO todo (description) VALUES($1) RETURNING *',
        [description],
      );
      res.status(200).send({
        error: false,
        message: 'Successfully added a new todo',
        data: JSON.stringify(newTodo.rows[0]),
      });
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: true,
        message: 'Internal server error',
      });
    }
  },
  async getTodos(req, res) {
    try {
      const todos = await pool.query('SELECT * from todo ORDER BY todo_id');
      res.status(200).send({
        error: false,
        message: 'Successfully fetched all todos',
        data: JSON.stringify(todos.rows),
      });
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: true,
        message: 'Internal server error',
      });
    }
  },
  async getTodo(req, res) {
    try {
      const {
        id,
      } = req.params;
      const todo = await pool.query('SELECT * from todo where todo_id = $1', [id]);
      res.status(200).send({
        error: false,
        message: 'Successfully fetched todo',
        data: JSON.stringify(todo.rows[0]),
      });
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: true,
        message: 'Internal server error',
      });
    }
  },

  async updateTodo(req, res) {
    try {
      const {
        id,
      } = req.params;
      const {
        description,
      } = req.body;
      const updateTodo = await pool.query('UPDATE todo SET description = $1 WHERE todo_id = $2 ', [description, id]);
      if (updateTodo) {
        res.status(200).send({
          error: false,
          message: 'Successfully updated todo',
        });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: true,
        message: 'Internal server error',
      });
    }
  },

  async deleteTodo(req, res) {
    try {
      const {
        id,
      } = req.params;
      const delTodo = await pool.query('DELETE FROM todo WHERE todo_id = $1', [id]);
      if (delTodo) {
        res.status(200).send({
          error: false,
          message: 'Successfully deleted todo',
        });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: true,
        message: 'Internal server error',
      });
    }
  },
};
