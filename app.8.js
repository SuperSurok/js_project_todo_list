const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
clearBtn.addEventListener('click', runEvent);

// Dubleclick
clearBtn.addEventListener('dbclick', runEvent);

// Mousedown
clearBtn.addEventListener('mousedown', runEvent);

// Mouseup
clearBtn.addEventListener('mouseup', runEvent);

// Mouseenter
card.addEventListener('mouseenter', runEvent);

// Mouseleave
card.addEventListener('mouseleave', runEvent);

// Mouseover
card.addEventListener('mouseleave', runEvent);

// Mouseout
card.addEventListener('mouseout', runEvent);

// Mousemove
card.addEventListener('mousemove', runEvent);

//Event heandler
function runEvent(evt) {
    evt.preventDefault();
    console.log(`EVENT TYPE: ${evt.type}`);
    heading.textContent = `MouseX: ${evt.offsetX} MouseY:${evt.offsetY}`;

    document.body.style.background = `rgb(${evt.offsetX}, ${evt.offsetY}, 40)`;
}