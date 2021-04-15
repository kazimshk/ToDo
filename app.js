let addBtn = document.getElementById('addBtn');
let notes = []
let taskNum = 0;
if (localStorage.getItem("notes")) {
  notes = JSON.parse(localStorage.getItem("notes"));;
}

showToDos();

addBtn.addEventListener("click", function () {
  let addTxt = document.getElementById("inputField");

  let today = new Date();

  class ToDOClass {
    constructor(input, num, dTime) {
      this.title = input;
      this.number = num;
      this.dateTime = dTime;
    }
  }
  taskNum = taskNum + 1;
  let Obj_ToDo = new ToDOClass(addTxt.value, taskNum, today);
  notes.push(Obj_ToDo);                                                    //add value to the notes obj
  localStorage.setItem("notes", JSON.stringify(notes));               //         updates the value in localstorage
  addTxt.value = "";
  console.log(notes);
  showToDos();
});

function showToDos() {
  let html = "";
  notes.forEach(function (element, index) {
    html += `
     <div class="card" style="width: 42rem;">
             <div class="my-2 card-body">
               <h5 class="card-title">ToDo # ${element.number} Task .       .${element.dateTime} </h5>
               <p class="card-text"> ${element.title} </p>
               <button id="${index}" onclick="deleteToDo(this.id)" class="btn btn-primary">Delete</button>
             </div>
           </div>`
  })
  let notesElm = document.getElementById("notes");

  if (notes.length > 0) {
    notesElm.innerHTML = html;
  }
  else {
    taskNum = 0;
    notesElm.innerHTML = `Nothing to SHow`;
  }
}

function deleteToDo(index) {
  notes.splice(index, 1);                                                     //  (position,deleteCount)
  localStorage.setItem("notes", JSON.stringify(notes));
  showToDos();
}