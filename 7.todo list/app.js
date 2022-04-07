showTask();
//input todos from user
let inputItem = document.querySelector("#input-item");
// add button
let addBtn = document.querySelector("#add-btn");

  addBtn.addEventListener("click",function(){
    inputValue = inputItem.value;
    if(inputValue.trim()!=0){
      //localstorage
      let webtask = localStorage.getItem("localtask");
      //checking localstorage and parsing data to array
      if(webtask==null){
        taskObj =[];
      }
      else{
        taskObj = JSON.parse(webtask);
      }
      //pushing todo data to array
      taskObj.push(inputValue);
      localStorage.setItem("localtask",JSON.stringify(taskObj));
      inputItem.value ="";
      }
    showTask();
  });

function showTask(){
  // get items in localstorage
  let webtask = localStorage.getItem("localtask");
  //checking localstorage and parsing data to array
  if(webtask==null){
    taskObj =[];
  }
  else{
    taskObj = JSON.parse(webtask);
  }
  let html = "";
  let tasks = document.querySelector(".todos");
  taskObj.forEach((item,index) => {
    html += `
    <tr >
    <td>${index+1}</td>
    <td>${item}</td>
    <td><button onclick="editTask(${index})">Edit</button></td>
    <td><button onclick="deleteTask(${index})">Delete</button></td>
  </tr>
    `
  });
  tasks.innerHTML = html;
}

//edit task
function editTask(index){
  
  // get items in localstorage
  let webtask = localStorage.getItem("localtask");
  //items in local storage are parsed
  let taskObj = JSON.parse(webtask);
  //add the related index task to the input
  inputItem.value = taskObj[index];
//
  let saveIndex = document.getElementById("edit-index");
  saveIndex.value = index;
  let addbtn = document.getElementById("add-btn");
  let savebtn = document.getElementById("save-btn");
  addbtn.style.display="none";
  savebtn.style.display="inline";
}
//save task for each editing
let savebtn = document.getElementById("save-btn");
savebtn.addEventListener("click",function(){
   // get items in localstorage
   let webtask = localStorage.getItem("localtask");
   //items in local storage are parsed
   let taskObj = JSON.parse(webtask);

   let addbtn = document.getElementById("add-btn");

   let saveIndex = document.getElementById("edit-index").value;
   taskObj[saveIndex]= inputItem.value; 

   savebtn.style.display="none";
   addbtn.style.display="inline";
   inputItem.value =""; 

   localStorage.setItem("localtask",JSON.stringify(taskObj));
   
  showTask();


})
//delete tasks
function deleteTask(index){
  // get items in localstorage
  let webtask = localStorage.getItem("localtask");
  //items in local storage are parsed
  let taskObj = JSON.parse(webtask);

  taskObj.splice(index, 1);
  localStorage.setItem("localtask",JSON.stringify(taskObj));
  showTask();
}

//delete all tasks
let deleteAll = document.getElementById("deleteall-btn");
deleteAll.addEventListener("click", function(){
  // get items in localstorage
  let webtask = localStorage.getItem("localtask");
  //items in local storage are parsed
  let taskObj = JSON.parse(webtask);
  let savebtn = document.getElementById("save-btn");
  let addbtn = document.getElementById("add-btn");

  taskObj = [];

  savebtn.style.display="none";
  addbtn.style.display="inline";

  localStorage.setItem("localtask",JSON.stringify(taskObj));
  showTask();
})




/*
//search
let search = document.getElementById("search");

search.addEventListener("input", function(){
  let trlist = document.querySelectorAll("tr");
  Array.from(trlist).forEach(function(item){
    let searchedtext =item.getElementsByTagName("td")[0].innerText;
    let searchValue = search.value;
    let re =  new RegExp(searchValue,'gi');
    if(searchedtext.match(re)){
      item.style.display= "table";
    }
    else{
      item.style.display= "none";
    }
  })
})
*/