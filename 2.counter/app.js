//initialize value
let count = 0;
//target the span where value is changed
const value = document.getElementById("value");
//target buttons
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

decrease.addEventListener("click", function(){
    count--;
    //textConetnt adds text over targeted element , here the element is value
    value.textContent = count;
    
});
reset.addEventListener("click", function(){
    count=0;
    value.textContent = 0;
});
increase.addEventListener("click", function(){
    count++;
    value.textContent = count;
});

