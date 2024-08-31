let todosArray = [];
let nextId = 1;


//function addOne
function addOne(task, completed, dueDate) {
    // Check if any parameter is empty or undefined
    if (!task || dueDate === undefined || dueDate === null) {
        //if (!task || !completed || !dueDate) {
        console.log('Condition failed:', { task, completed, dueDate });
        return false;
    }

    const newTodo = {
        id: nextId++,  
        task,
        completed,
        dueDate
    };

    todosArray.push(newTodo); 
    return newTodo;
}
//test function addOne
const newTodo1 = addOne('Cooking', false, "2024-08-30");
const newTodo2 = addOne('Cleaning', false, "2024-08-30");
console.log('addOne called:', newTodo2); 


//function getAll
function getAll() {
    return todosArray;
}
//test function getAll
if (require.main === module) {
    console.log("getAll called:", getAll());
}


//function findById
function findById(id) {
    const numericId = Number(id); // Converts the ID to a number
    const todo = todosArray.find(item => item.id === numericId); // Finds the car with the matching ID
    return todo || false; // Returns the car or false if not found
}
//test function findById
if (require.main === module) {
    console.log("findById called:", findById(1));
}


//function updateOneById
function updateOneById(id, updatedData) {
    const todo = findById(id);
    if (todo) {
        // Update properties only if they are provided in updatedData
        if (updatedData.task) todo.task = updatedData.task;
        if (updatedData.completed) todo.completed = updatedData.completed;
        if (updatedData.dueDate) todo.dueDate = updatedData.dueDate;
        return todo; 
    }
    return false; 
}
//test function updateOneById
if (require.main === module) {
    console.log("updateOneById called:", updateOneById(1, { dueDate: '2024-08-31' }));
}


//function deleteOneById
function deleteOneById(id) {
    const todo = findById(id);
    if (todo) {
        const initialLength = todosArray.length;
        todosArray = todosArray.filter(car => car.id !== Number(id)); 
        return todosArray.length < initialLength; 
    }
    return false; 
}
//test function deleteOneById
if (require.main === module) {
    console.log("deleteOneById called:", deleteOneById(1));
}


//Export the ToDos
const ToDos = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = ToDos;