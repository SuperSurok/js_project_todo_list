document.querySelector('.clear-tasks').addEventListener('click',
    function(evt) {
        evt.preventDefault();
        console.log('Hello World');
    });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(evt) {
    evt.preventDefault();
    let val;
    val = evt;

    // Event target element
    val = evt.target;
    val = evt.target.id;
    val = evt.target.className;
    val = evt.target.classList;
    evt.target.innerText = 'Hello';

    // Event type
    val = evt.type;

    // Timestamp
    val = evt.timeStamp;

    // Coords event relative to window
    val = evt.clientY;
    val = evt.clientX;

    // Coords event relative to the element
    val = evt.offsetY;
    val = evt.offsetX;

    console.log(val);
}