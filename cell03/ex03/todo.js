let TodoList = [];


function createTodo(text) {
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    let todoText = document.createElement('p');
    todoText.textContent = text;

    let removeButton = document.createElement('button');
    removeButton.textContent = 'x';
    removeButton.onclick = function () {
        remove(text);
    };

    todoDiv.appendChild(todoText);
    todoDiv.appendChild(removeButton);

    return todoDiv;
}


function render() {
    const list = document.getElementById('ft_list');
    list.innerHTML = '';

    TodoList.forEach(function (element) {
        list.appendChild(createTodo(element));
    });

    localStorage.setItem('todoList', JSON.stringify(TodoList));
}


function newTodo() {
    let name = prompt("Name the todo.");
    if (name && name.length > 0) {
        TodoList.unshift(name);
        render();
    }
}


function remove(text) {
    let yes = confirm('Are you sure you want to remove "' + text + '"?');
    if (yes) {
        TodoList = TodoList.filter(todo => todo !== text);
        render();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let savedList = localStorage.getItem('todoList');
    if (savedList) {
        TodoList = JSON.parse(savedList);
        render();
    }
});
