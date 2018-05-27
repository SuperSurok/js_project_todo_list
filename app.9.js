const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// Clear input
taskInput.value = '';

form.addEventListener('submit', runEvent);

// Keydown
taskInput.addEventListener('keydown', runEvent);

// Keydup
taskInput.addEventListener('keyup', runEvent);

// Keypess
taskInput.addEventListener('keyperss', runEvent);

// Focus
taskInput.addEventListener('focus', runEvent);

// Blur
taskInput.addEventListener('blur', runEvent);

// Cut
taskInput.addEventListener('cut', runEvent);

// Paste
taskInput.addEventListener('paste', runEvent);

// Input
taskInput.addEventListener('input', runEvent);

// Change
taskInput.addEventListener('change', runEvent);


function runEvent(evt) {
    // evt.preventDefault();
    console.log(`EVENT TYPE: ${evt.type}`);
    // console.log(evt.target.value);
    // heading.innerText = evt.target.value;
    // Get input value
    // console.log(taskInput.value);
}