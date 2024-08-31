const ToDo = require("./todoLib");


// Get all todos
const getAllTodos = (req, res) => {
    const todos = ToDo.getAll();
    res.json(todos);
};


// Create a new todo
const createTodo = (req, res) => {
    const { task, completed, dueDate } = req.body;
  
    const newTodo = ToDo.addOne(task, completed, dueDate);
  
    if (newTodo) {
      res.json(newTodo);
    } else {
      res.status(500).json({ message: "Failed to create todo" });
    }
};


// Get a todo by ID
const getTodoById = (req, res) => {
    const numericId = Number(req.params.todoId); 
    const todo = ToDo.findById(numericId); 
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({ message: 'Todo not found' });
    }
};


// Update a todo by ID
const updateTodo = (req, res) => {
    const todoId = Number(req.params.todoId); // Convert to number for ID search
  
    const { task, completed, dueDate } = req.body;
  
    const updatedTodo = ToDo.updateOneById(todoId, { task, completed, dueDate });
  
    if (updatedTodo) {
      res.json(updatedTodo);
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
};


// Delete a todo by ID
const deleteTodo = (req, res) => {
    const todoId = Number(req.params.todoId); // Convert to number for ID search
  
    const isDeleted = ToDo.deleteOneById(todoId);
  
    if (isDeleted) {
      res.json({ message: "Todo deleted successfully" });
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
};

module.exports = {
    getAllTodos,
    createTodo,
    getTodoById,
    updateTodo,
    deleteTodo,
};
