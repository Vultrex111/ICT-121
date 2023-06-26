const inputField = document.getElementById("input-field")
const AddItem = document.getElementById('add-item')
const containers = document.getElementById('list-container')
function addTask() {
    if(inputField.value === "") {
        alert('Empty Input') ;
    } else {
        let li = document.createElement('li') ;
        li.innerHTML = inputField.value;
        containers.appendChild(li)
    }
}