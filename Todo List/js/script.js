const addUserBtn = document.getElementById("addUserBtn");
const textBtn = addUserBtn.innerText;

const addUserInput = document.getElementById("addUserInput");
const records = document.getElementById("records");
let userArray = [];
let edit_id = null;

let objStr = localStorage.getItem('name');

if (objStr != null) {
    userArray = JSON.parse(objStr);
}

displayInfo();
addUserBtn.onclick = () => {
    const userName = addUserInput.value;

    if (edit_id != null) {
        userArray.splice(edit_id, 1, { 'name': userName });
        edit_id = null;
    }
    else {
        userArray.push({ 'name': userName });
    }
    saveInfo(userArray);
    addUserInput.value = "";
    addUserBtn.innerText = textBtn;
}

// function to save info
function saveInfo(userArray) {
    let userStr = JSON.stringify(userArray);
    localStorage.setItem('name', userStr)
    displayInfo();
}

// function to display info
function displayInfo() {
    let statement = "";

    userArray.forEach((name, i) => {
        statement += `
        <tr>
        <td>${i + 1}</td>
        <td>${name.name}</td>
        <td>
          <button class="btn btn-primary btn-sm me-2" onclick='editInfo(${i})'><i class="bi bi-pencil-square"></i></button>    
          <button class="btn btn-danger btn-sm" onclick=deleteInfo(${i})><i class="bi bi-trash-fill"></i> </button>
        </td>
      </tr>`;
    });
    records.innerHTML = statement;
}

// function to edit info
function editInfo(id) {
    edit_id = id;
    addUserInput.value = userArray[id].name;
    addUserBtn.innerText = "Save Changes";
}

// function to delete info
function deleteInfo(id) {
    if (confirm("Are you Sure want to delete this Record")) {
        userArray.splice(id, 1);
        saveInfo(userArray);
    }
}


// search functionality of the todo list

let searchInput = document.querySelector("#search");
let allTr = document.querySelectorAll("#records tr")

searchInput.addEventListener("input", function (e) {
    let searchText = e.target.value.toLowerCase();
    records.innerHTML = "";
    allTr.forEach(tr=>{
        let allTds = tr.querySelectorAll("td");
        if(allTds[1].innerText.toLowerCase().indexOf(searchText) > -1){
            records.appendChild(tr);
        }
    })

    if(records.innerHTML == ""){
        records.innerText = "No Records Found";
    }

})
