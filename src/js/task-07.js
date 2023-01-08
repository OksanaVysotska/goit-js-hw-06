
const controller = document.querySelector('#font-size-control');
controller.addEventListener('input', inputControllerHandler);

const text = document.querySelector('#text');


function inputControllerHandler(event) {

    let currentValue = event.currentTarget.value;  
    text.style.fontSize = `${currentValue}px`;
    
}