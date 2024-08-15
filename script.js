const weightInput = document.getElementById('weight')
const heightInput = document.getElementById('height')
const bmiDisplay = document.getElementById('bmi-display')
const btn = document.getElementById('btn')

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    bmi = (weightInput.value/(heightInput.value*heightInput.value))*10000;
    console.log(bmi);
    bmiDisplay.textContent= `Your BMI is ${bmi}`;
})

