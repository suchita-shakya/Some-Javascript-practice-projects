const colors= ["green", 'red', "blue",'purple','pink','yellow'];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");


btn.addEventListener("click", function(){
    //get element main
    let elem = document.getElementById("main");
    //get random numners between 0 and 5
    const randomNumber = getRandomNumber();
    elem.style.backgroundColor = colors[randomNumber];
    color.textContent= colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}