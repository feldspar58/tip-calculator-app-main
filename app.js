
document.addEventListener('DOMContentLoaded', () =>{
const buttons = document.querySelectorAll('.btn');
const billInput = document.getElementById('num');
const peopleInput = document.getElementById('people');

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

function updateCalculation(){
    const tip = (bill * clickedPercent);
    const total = tip * totalPeople;

    tipAmountDisplay.textContent = tip.toFixed(2);
    totalAmountDisplay.textContent = total.toFixed(2);
}

});