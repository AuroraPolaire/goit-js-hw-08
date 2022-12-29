import _ from 'lodash';
const localStorageKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

fillFormFields();

function fillFormFields() {
  try {
    let data = localStorage.getItem(localStorageKey);
    if (data) {
      data = JSON.parse(data);
      Object.entries(data).forEach(([name, value]) => {
        form.elements[name].value = value;
      });
    }
  } catch (error) {
    console.log(`error`);
  }
}

function onInputValueGet({ target }) {
  let inputValues = localStorage.getItem(localStorageKey);
  inputValues = inputValues ? JSON.parse(inputValues) : {};
  inputValues[target.name] = target.value;

  localStorage.setItem(localStorageKey, JSON.stringify(inputValues));
}

form.addEventListener('input', _.throttle(onInputValueGet, 500));
form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  data.forEach((value, name) => console.log(name, value));
  form.reset();
});

form.addEventListener('reset', () => {
  localStorage.removeItem(localStorageKey);
});
