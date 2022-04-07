const openBtn = document.querySelector(".open-btn");
const modal = document.querySelector(".modal-container");
const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", function(){
    modal.classList.add("show");
})

closeBtn.addEventListener("click", function(){
    modal.classList.remove("show");
})