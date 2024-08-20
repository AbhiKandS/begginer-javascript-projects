let todo = JSON.parse(localStorage.getItem('todo')) || [];
displayTodoList();


document.querySelector('#add-button').addEventListener('click', ()=>{
    addTodoToArray();
    window.location.reload();
})

function addTodoToArray() {
    let newTodo = {}
    newTodo[`name`] = document.querySelector('#todo-name').value;
    newTodo['date'] = document.querySelector('#todo-date').value || 'any time';
    
    if (!newTodo.name) return;
    todo.push(newTodo);
    let jsonTodo = JSON.stringify(todo);
    localStorage.setItem('todo', jsonTodo);
    
    document.querySelector('#todo-name').value = '';
    document.querySelector('#todo-date').value = '';
}

function displayTodoList() {
    let html = '';
    for (let i = 0; i < todo.length; i++) {
        html += `<tr class="todo-item">
        <td>${todo[i].name}</td>
        <td>${todo[i].date}</td>
        <td><button class="remove-button">-</button></td>
        </tr>`
    }

    document.querySelector('#todo-list').innerHTML = html;

    document.querySelectorAll('.remove-button').forEach((button)=> {
        button.addEventListener('click', (event)=> {
            removeItem(event);
            window.location.reload();
        })
    })
}

function removeItem(event) {
    let buttons = document.querySelectorAll('.remove-button');
    let dataIndex = Array.from(buttons).indexOf(event.target);

    todo.splice(dataIndex,1);
    let jsonTodo = JSON.stringify(todo);
    localStorage.setItem('todo', jsonTodo);
}