var submit = document.getElementById('submit-btn');
var nm = document.getElementById('name-input');
var mail = document.getElementById('email-input');
var msg = document.getElementById('message-input');

submit.addEventListener('click', e => {
  e.preventDefault();
  var name = nm.value;
  var email = mail.value;
  var message = msg.value;


  var ref = firebase.database().ref("messages");
  var newUser = ref.push();
  newUser.set({
    name: name,
    email: email,
    message: message,
  }).then(x => {
    document.getElementById('contactus-form-id').reset();
    document.location.href = "/index.html?Submit=Successful";
  });
})