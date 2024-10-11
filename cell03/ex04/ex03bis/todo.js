let TodoList = [];


function createTodo(text) {
    return $('<div class="todo"></div>').html('<p>' + text + '</p>' + '<button onclick="remove(\'' + text + '\')">x</button>');
}


function render() {
    $('#ft_list').empty();
    $.each(TodoList, function(index, element) {
        $('#ft_list').append(createTodo(element));
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

$(document).ready(function() {
    let savedList = localStorage.getItem('todoList');
    if (savedList) {
        TodoList = JSON.parse(savedList);
        render();
    }
});
