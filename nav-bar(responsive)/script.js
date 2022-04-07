//classList- shows all the classes
//contains- checks classList for specific class
//add - add class
//remove - remove class
//toggle - toggles class

const mobile = document.querySelector(".hamburger");
const navLists = document.querySelector(".lists");


mobile.addEventListener("click", ()=>{
    /*if(navLists.classList.contains("show")){
        navLists.classList.remove("show");
    }
    else{
        navLists.classList.add("show");
    }*/
    //OR
    navLists.classList.toggle("show");
});