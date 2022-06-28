import { makeRequest } from '../client/authHelpers.js';
import { Auth } from '../js/auth.js';

const Authentication = new Auth();

//Authentication.login();

const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  Authentication.login();
});

/*makeRequest('login', 'POST', {
  password: 'user1',
  email: 'user1@email.com',
});*/
