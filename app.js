
document.addEventListener('DOMContentLoaded', () =>{
const buttons = document.querySelectorAll('.btn');
const billInput = document.getElementById('num');
const peopleInput = document.getElementById('people');
const reset = document.querySelector('.reset');
const customBtn = document.getElementById('custom-btn');
const customInput = document.getElementById('custom-input');


const tipAmountDisplay = document.getElementById('tip-amount');
const totalAmountDisplay = document.getElementById(('total-amount'));

let bill = 0;
let  clickedPercent = 0;
let totalPeople = 0;




const ClickedButton = (button) => {
    buttons.forEach(button => button.classList.remove('active'));
    button.classList.add('active');
    clickedPercent = parseFloat(button.textContent)/100;
    updateCalculation();
  }

buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        event.preventDefault();
        ClickedButton(button);
       return console.log('i picked it');
    });
});

billInput.addEventListener('input', () => {
    bill = parseFloat(billInput.value) || 0;
    updateCalculation();
})

peopleInput.addEventListener('input', () => {
    totalPeople = parseInt(peopleInput.value) || 1;
    updateCalculation();
});

customBtn.addEventListener('click', (e) => {
  e.preventDefault();
  customBtn.style.display = 'none';
  customInput.style.display = 'inline-block';
  customInput.focus();
});

customInput.addEventListener('input', () => {
  let customValue = parseFloat(customInput.value);
  if (!isNaN(customValue)) {
    clickedPercent = customValue / 100;
    buttons.forEach(btn => btn.classList.remove('active'));
    updateCalculation();
  }
});


function updateCalculation(){
    const tip = (bill * clickedPercent) / totalPeople;
    const total = tip * totalPeople;

    tipAmountDisplay.textContent = tip.toFixed(2);
    totalAmountDisplay.textContent = total.toFixed(2);
};

reset.addEventListener('click', () => {
    billInput.value = '';
    peopleInput.value = '';
    tipAmountDisplay.textContent = '0.00';
    totalAmountDisplay.textContent = '0.00';
    customBtn.style.display = 'block';
    customInput.style.display = 'none';

    buttons.forEach(button => button.classList.remove('active'));
    clickedPercent = 0;
    bill = 0;
    totalPeople = 0;

    console.log('Reset clicked');
  });

});
