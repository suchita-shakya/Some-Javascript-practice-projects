const hexValues = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");


btn.addEventListener("click", function(){
    let hexColor ="#";
    for(let i=0;i<6;i++)
    {
        //+= concatnates the number to form string of length 6 eg:#1f2f4b 
        hexColor += hexValues[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.getElementById("main").style.backgroundColor = hexColor;
    
});

function getRandomNumber(){
    return Math.floor(Math.random()*hexValues.length);
}