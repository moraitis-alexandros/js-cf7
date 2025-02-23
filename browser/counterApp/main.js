const DEFAULT = 0
let counter = DEFAULT //state - model

window.addEventListener('DOMContentLoaded', function() {
    this.document.querySelector('#btnDecr').addEventListener('click', () => onDecreaseClicked())
    this.document.querySelector('#btnReset').addEventListener('click', () => onResetClicked())
    this.document.querySelector('#btnIncr').addEventListener('click', () => onIncreaseClicked())
})

/**
 * Handler - Controller
 */

function onDecreaseClicked() {
    decreaseCount()
}


function onResetClicked() {
    resetCount()
}


function onIncreaseClicked() {
    increaseCount()
}

/**
 * 
 */

function increaseCount() {
    counter++;
    render()
}

function resetCount() {
    counter = DEFAULT;
    render()
}

/**
 * Model
 */

function decreaseCount() {
    counter--;
    render()
}

function render() {
    const counterDOM = document.querySelector('#counter')
    counterDOM.textContent = counter
    styleCounter(counterDOM)
}

function styleCounter(counterDOM) {
    counterDOM.classList.toggle('color-green', counter > 0)
    counterDOM.classList.toggle('color-red', counter < 0)
    counterDOM.classList.toggle('color-black', counter === 0)
}



// let counter = 0;
// const btnDecr = document.getElementById('btnDecr')
// const btnReset = document.getElementById('btnReset')
// const btnIncr = document.getElementById('btnIncr')
// let counterDOM = document.getElementById('counter')

// btnDecr.addEventListener('click', () => {
//     counter--
//     counterDOM.innerHTML = counter
// })

// btnReset.addEventListener('click', () => {
//     counter = 0
//     counterDOM.innerHTML = counter
// })

// btnIncr.addEventListener('click', () => {
//     counter++
//     counterDOM.innerHTML = counter
// })