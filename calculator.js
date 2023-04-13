const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const btn = document.getElementById("btn");
const dayR = document.getElementById("day-r");
const monthR = document.getElementById("month-r");
const yearR = document.getElementById("year-r");

btn.addEventListener('click', ()=>{
    const y = yearInput.value;
    const m = monthInput.value;
    const d = dayInput.value;
    const date = new Date();
    const actualY = date.getFullYear();
    const actualM = date.getMonth() + 1;
    const actualD = date.getDate();

    if(y > actualY) yearInput.value = "";
    if(m > 12 || m < 1) monthInput.value = "";
    if(d > 31 || d < 1) dayInput.value = "";

    if(dayInput.value != "" && monthInput.value != "" && yearInput.value != ""){
        calculateAge(actualD, actualM, actualY, y, m, d);
    }
    else{
        setDefault();
    }
})

function calculateAge(actualD, actualM, actualY, y, m, d){
    yearR.textContent = actualY - y;
    if(actualM < m) yearR.textContent -= 1;
    if(actualM >= m){
        monthR.textContent = actualM - m;
    }else{
        monthR.textContent = (actualM + 12) - m;
    }
    
    if(d > actualD){
        monthR.textContent -= 1;
        dayR.textContent = Math.abs(actualD - d);
    }else{
        dayR.textContent = actualD - d;
    }

    yearInput.value = "";
    monthInput.value = "";
    dayInput.value = "";
}

function setDefault(){
    dayR.textContent = " -- ";
    monthR.textContent = " -- ";
    yearR.textContent = " -- ";
}