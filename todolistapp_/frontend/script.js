document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTodoText = todoInput.value.trim();

        if (newTodoText !== '') {
            const li = document.createElement('li');

            const todoText = document.createElement('span');
            todoText.textContent = newTodoText;

            const completeBtn = document.createElement('button');
            completeBtn.textContent = "완료";
            completeBtn.addEventListener('click', () => {
                todoText.classList.toggle('complete');
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = "삭제";
            deleteBtn.addEventListener('click', () => {
                todoList.removeChild(li);
            });

            li.appendChild(todoText);
            li.appendChild(completeBtn);
            li.appendChild(deleteBtn);
            todoList.appendChild(li);

            todoInput.value = '';
        }
    });
});
