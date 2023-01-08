
const refButton = {
    sub: document.querySelector("[data-action='increment']"),
    add: document.querySelector("[data-action='decrement']"),
    span: document.querySelector('#value'),
    counter: document.querySelector('#counter')
  };

  let counterValue = 0;
  const increment = () => {
    counterValue += 1;
  
    document.getElementById('value').textContent = counterValue;
  };
  
  const decrement = () => {
    counterValue -= 1;
  
    document.getElementById('value').textContent = counterValue;
  };
  
  refButton.sub.addEventListener('click', increment);
  refButton.add.addEventListener('click', decrement);