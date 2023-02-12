import throttle from 'lodash.throttle';
import { save, load } from './storage';

const formEl = document.querySelector('.feedback-form');
const formInputName = document.querySelector('input');
const formTextareaMessage = document.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';
const formObject = {};

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFeedbackInput, 500));

function onFormSubmit(e) {
  e.preventDefault();

  console.log('Відправляємо форму!');

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFeedbackInput(e) {
  formObject[e.target.name] = e.target.value;
  save(STORAGE_KEY, formObject);
}

const saveMessage = load(STORAGE_KEY);

function populateFormInput(object) {
  if (object && formInputName.name === 'email') {
    formObject.email = object.email;
    formInputName.value = object.email;
  }

  if (object && formTextareaMessage.name === 'message') {
    formObject.message = object.message;
    formTextareaMessage.value = object.message;
  }
  console.log(formObject);
}

populateFormInput(saveMessage);
