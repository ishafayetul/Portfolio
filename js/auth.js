firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    document.getElementById('signout-nav').style.display = "block";
    if (user.email === "admin@mail.com") {
      document.getElementById('contact-feedback-nav').style.display = "block";
    } else {
      document.getElementById('contact-nav').style.display = "block";
    }

  } else {
    document.getElementById('signup-nav').style.display = "block";
    document.getElementById('login-nav').style.display = "block";
    document.getElementById('contact-nav').style.display = "block";
  }
});

function signout() {
  firebase.auth().signOut();
  sessionStorage.clear();
  document.location.href = "/index.html?Logout=Successful";
}