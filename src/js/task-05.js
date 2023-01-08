
const inputData = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
inputData.addEventListener('input', inputDataHandler);

function inputDataHandler(event) {
   let value = event.currentTarget.value;
    if (value !== '' && value !== ' ') {
       return nameOutput.textContent = value;
    } 
   return nameOutput.textContent = 'Anonymous';
    
}
