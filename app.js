let addBtn = document.getElementById('addBtn');
let fetchBtn = document.getElementById('fetchBtn');
let addTxt = document.getElementById("inputField");

fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
  console.log('You have clicked the fetchBtn')
  fetch('https://jsonplaceholder.typicode.com/todos', {                         //it returns the promise
    method: 'POST',
    body: JSON.stringify({
      title: addTxt.value,

    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

};

addBtn.addEventListener("click", function () {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/', true);


  xhr.onprogress = function () {
    console.log("processing");
  }

  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
      let obj = JSON.parse(this.responseText);
      console.log(obj);
      let list = document.getElementById('list');
      let str = ""
      for (key in obj) {

        str += `
    <div class="card" style="width: 42rem;">
            <div class="my-2 card-body">
              <h5 class="card-title">ToDo # ${obj[key].id} Task </h5>
              <p class="card-text"> ${obj[key].title} </p>
              <button id="${obj[key].id}" onclick="deleteToDo(this.id)" class="btn btn-primary">Delete</button>
            </div>
          </div>`
      }
      list.innerHTML = str;
    }
    else {
      console.log("Some error occured")
    }
  }
  xhr.send();
});


function deleteToDo(index) {
  fetch('https://jsonplaceholder.typicode.com/todos/${index}', {
    method: 'DELETE',
  });
}

/////////////////////////////////////////////////////
