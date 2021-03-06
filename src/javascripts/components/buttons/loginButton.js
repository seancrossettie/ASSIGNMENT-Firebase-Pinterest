import signIn from '../';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `<button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>
                     <h1>Pinterest</h1>`;
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
