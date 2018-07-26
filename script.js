let css = document.querySelector('h3');
let color1= document.querySelector('#color1');
let color2= document.querySelector('#color2');
let body= document.querySelector('#gradient');
let para= document.querySelector('p');

const setGradient = () => {
     body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
     css.textContent= body.style.background + ';'
     para.textContent= 'Copy and paste this code in your CSS';
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
