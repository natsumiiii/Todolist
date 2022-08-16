const createTodo = document.querySelector('#create-todo');
createTodo.addEventListener('click', () => {
    const modal = document.querySelector('#modal');
    modal.insertAdjacentHTML('beforeend',`<div class="modal">
        <div class="modal__contents">
            <form class="modal__contents__form">
                <div class="modal__contents__form__summary">
                    <label class="modal__contents__form__summary__label" for="title">タイトル</label>
                    <input class="modal__contents__form__summary_input" id="title" type="text" name="title" placeholder="やるべきこと">
                </div>
                <div class="modal__contents__form__summary">
                    <label class="modal__contents__form__summary__label" for="description">説明</label>
                    <textarea class="modal__contents__form__summary__textarea" id="description" name="description" placeholder="やるべきことの内容"></textarea>
                </div>
                <button class="modal__contents__form__submit" type="submit">追加</button>
            </form>
        </div>
    </div>`);
    const modalContentsForm = document.querySelector('.modal__contents__form');
    modalContentsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.querySelector('#title');
        const description = document.querySelector('#description');
        const todos = document.querySelector('#todos');
        todos.insertAdjacentHTML('afterbegin',`<article class="todo">
            <h1 class="todo__title">${title.value}</h1>
            <p class="todo__description">${description.value}</p>
            <button onclick="editTodo(this)" class="todo__edit">編集</button>
            <button onclick="deleteTodo(this)" class="todo__delite">削除</button>
        </article>`);
        modal.innerHTML = "";
    });
});

const editTodo = (e) =>{
    const todoTitle = e.parentElement.querySelector('.todo__title');
    const todoDescription = e.parentElement.querySelector('.todo__description');
    const modal = document.querySelector('#modal');
    modal.insertAdjacentHTML('beforeend',`<div class="modal">
        <div class="modal__contents">
            <form class="modal__contents__form">
                <div class="modal__contents__form__summary">
                    <label class="modal__contents__form__summary__label" for="title">タイトル</label>
                    <input class="modal__contents__form__summary_input" value="${todoTitle.innerHTML}" id="title" type="text" name="title" placeholder="やるべきこと">
                </div>
                <div class="modal__contents__form__summary">
                    <label class="modal__contents__form__summary__label" for="description">説明</label>
                    <textarea class="modal__contents__form__summary__textarea" id="description" name="description" placeholder="やるべきことの内容">${todoDescription.innerHTML}</textarea>
                </div>
                <button class="modal__contents__form__submit" type="submit">編集</button>
            </form>
        </div>
    </div>`);
    const modalContentsEdit = document.querySelector('.modal__contents__form');
    modalContentsEdit.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.querySelector('#title');
        const description = document.querySelector('#description');
        todoTitle.innerHTML = title.value;
        todoDescription.innerHTML = description.value;
        modal.innerHTML = "";
    })
}

const deleteTodo = (e) => {
    e.parentElement.remove();
}