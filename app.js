
console.log("Welcome to notes app");
let addBtn = document.getElementById('addBtn');
showToDos();
addBtn.addEventListener("click", function(){
    let addTxt = document.getElementById("inputField");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);                                                    //add value to the notes obj
    localStorage.setItem("notes", JSON.stringify(notesObj));                        //updates the value in localstorage
    addTxt.value = "";
    console.log(notesObj);
    showToDos();
});

function showToDos() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
     let html = "";
    // let today = new Date();
    // let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    // let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


    notesObj.forEach(function (element, index) {
       

        html += `
    <div class="card" style="width: 42rem;">
            <div class="my-2 card-body">
              <h5 class="card-title">ToDo # ${index + 1} Task </h5>
              <p class="card-text"> ${element} </p>
              <button id="${index}" onclick="deleteToDo(this.id)" class="btn btn-primary">Delete</button>
            </div>
          </div>`
    })
    let notesElm = document.getElementById("notes");
    console.log(notesElm);
    if (notesObj.length != null) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to SHow`;
    }
}

function deleteToDo(index){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showToDos();
}