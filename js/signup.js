var submit = document.getElementById('signup-submit');
var mail = document.getElementById('email-input');
var pw = document.getElementById('password-input');
var nm = document.getElementById('name-input');
var con_pw = document.getElementById('confirm-password-input');

submit.addEventListener('click', e => {
  e.preventDefault();
  var password = pw.value;
  var confirm_pw = con_pw.value;
  var email = mail.value;
  var name = nm.value;

  if (email.length && password.length && name.length && confirm_pw.length) {

    document.getElementById('incompleteForm').style.display = "none";
    if (password !== confirm_pw) {
      document.getElementById('passwordMatch').style.display = "block";
      console.log("Passwords Don't Match");
    } else {
      document.getElementById('passwordMatch').style.display = "none";

      if (password.length >= 6) {
        document.getElementById('passwordShort').style.display = "none";
        var aut = firebase.auth().createUserWithEmailAndPassword(email, password).then(cred => {
          console.log(cred);
          document.getElementById('alreadyExistAlert').style.display = "none";
          var ref = firebase.database().ref("users");
          var newUser = ref.push();
          newUser.set({
            name: name,
            email: email,
            password: password,
          }).then(x => {
            document.getElementById('reg-form-id').reset();
            firebase.auth().signOut().then(x => {
              document.location.href = "./login.html?Signup=Successful";
            });
          });

        }).catch(e => {
          console.log("Connection Error!  id:" + e.message);
          document.getElementById('alreadyExistAlert').style.display = "block";
        });

      } else {
        document.getElementById('passwordShort').style.display = "block";
      }
    }
  } else {
    document.getElementById('incompleteForm').style.display = "block";
  }
})