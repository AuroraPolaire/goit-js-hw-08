import _ from 'lodash';

const form = document.querySelector('.feedback-form');
const inputValues = {};

function fillFormFields() {
  try {
    const data = localStorage.getItem('feedback-form-state');
    const parsedData = JSON.parse(data);

    if (parsedData === null) {
      return;
    }

    for (const item in parsedData) {
      form.elements[item].value = parsedData[item];
    }
  } catch (error) {
    console.log(parsedData);
  }
}

fillFormFields();

function onInputValueGet({ target }) {
  inputValues[target.name] = target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(inputValues));
}

function onSubmitDataSend(event) {
  event.preventDefault();
  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  const message = formEl.message.value;

  if (email !== '' && message !== '') {
    console.log({
      email,
      message,
    });
    form.reset();
  }
}

form.addEventListener('input', _.throttle(onInputValueGet, 500));
form.addEventListener('submit', onSubmitDataSend);
