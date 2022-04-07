const reviews= [
{
    id:1,
    name:"Suchita Shakya",
    job:"Web Developer",
    img:"images/pic.jpg",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum minus deleniti at necessitatibus! Quam, molestiae ea repellat non earum voluptatum nostrum! Illo, explicabo! Nostrum esse qui assumenda impedit exercitationem molestias?",
    
},
{
    id:2,
    name:"John Doe",
    job:"Python Developer",
    img:"images/pic2.jpg",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum minus deleniti at necessitatibus! Quam, molestiae ea repellat non earum voluptatum nostrum! Illo, explicabo! Nostrum esse qui assumenda impedit exercitationem molestias?",
    
},
{
    id:3,
    name:"Bob d",
    job:"Php Developer",
    img:"images/pic.jpg",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum minus deleniti at necessitatibus! Quam, molestiae ea repellat non earum voluptatum nostrum! Illo, explicabo! Nostrum esse qui assumenda impedit exercitationem molestias?",
    
},
{
    id:4,
    name:"Anna Watson",
    job:"Designer",
    img:"images/pic.jpg",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum minus deleniti at necessitatibus! Quam, molestiae ea repellat non earum voluptatum nostrum! Illo, explicabo! Nostrum esse qui assumenda impedit exercitationem molestias?",
    
},
]

//select all the elements needed
const img = document.getElementById("image-person");
const author = document.getElementById("name");
const job = document.getElementById("job");
const info = document.getElementById("info");

//select buttons
const previousbtn = document.getElementById("previous");
const nextbtn = document.getElementById("next");
const surprise = document.getElementById("surprise");

//setting starting item
let startItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded",function(){
    showPerson(startItem);
});

//show person based on item
function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
//show next person
nextbtn.addEventListener("click", function(){
    startItem++;
    if(startItem > reviews.length -1){
        startItem=0;
    }
    showPerson(startItem);
});
previousbtn.addEventListener("click", function(){
    startItem--;
    if(startItem < 0){
        startItem = reviews.length-1;
    }
    showPerson(startItem);
});

//random button
surprise.addEventListener("click",function(){
    startItem = Math.floor(Math.random()*reviews.length);
    console.log(startItem);
    showPerson(startItem);
})