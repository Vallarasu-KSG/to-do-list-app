const inputBox = document.querySelector('#input-box');
  const listContainer = document.querySelector('.list-container');

  function AddTextClick() {
    const value = inputBox.value.trim();

    if (value === '') {
      inputBox.style.border = '2px solid red';
      return;
    }

    inputBox.style.border = '2px solid #4a148c';

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.classList.add('check-icon', 'unchecked');

    const text = document.createTextNode(value);

    const deleteBtn = document.createElement('span');
    deleteBtn.innerHTML = '🗑️';
    deleteBtn.classList.add('delete-btn');

    // Delete function
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent triggering the line-through toggle
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(text);
    li.appendChild(deleteBtn);
    listContainer.appendChild(li);

    inputBox.value = '';

    li.addEventListener('click', () => {
      span.classList.toggle('checked');
      span.classList.toggle('unchecked');
      li.classList.toggle('checked-item');
    });
  }

  inputBox.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      AddTextClick();
    }
  });