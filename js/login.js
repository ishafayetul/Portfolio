const submit = document.getElementById('login-submit');
const mail = document.getElementById('email-input');
const pw = document.getElementById('password-input');

submit.addEventListener('click', e => {
  e.preventDefault();
  const email = mail.value;
  const password = pw.value;
  firebase.auth().signInWithEmailAndPassword(email, password).then(cred => {

    document.getElementById('wrongEmailAlert').style.display = "none";

    document.location.href = "/index.html?Login=Successful";

  }).catch(e => {
    document.getElementById('wrongEmailAlert').style.display = "block";
    console.log("Error!  id: " + e.message);
  });
});