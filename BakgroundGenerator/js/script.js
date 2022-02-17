
var css = document.querySelector("h3");
var inputOne = document.querySelector(".inputOne");
var inputTwo = document.querySelector(".inputTwo");
var body = document.getElementById("bodyGradient")
console.log(css);
console.log(inputOne);
console.log(inputTwo);

function setGradient() {
    body.style.background = `linear-gradient(to right, ${inputOne.value}, ${inputTwo.value})`;
    css.textContent = `${body.style.background};`;

}

inputOne.addEventListener("input",  setGradient);
inputTwo.addEventListener("input",  setGradient);
document.body.onload= setGradient;
