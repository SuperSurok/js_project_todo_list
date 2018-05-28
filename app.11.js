// Set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '36');

// Set session storage item
// sessionStorage.setItem('name', 'Marta');

// Remove from local storage
// localStorage.removeItem('name', 'John');

// Get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// // Clear local storage
// localStorage.clear();
// console.log(name, age);

document.querySelector('form').addEventListener('submit', function(evt) {
    evt.preventDefault();
    const task = document.getElementById('task').value;
    let tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    alert('Task saved');
});

const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(task => {
    console.log(task);
});