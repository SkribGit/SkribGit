var config = {
  apiKey: 'AIzaSyDlEa4vOr9tFtKr-q4ADCRV2fAjg2Xfn5M',
  authDomain: 'skribdigitaweb.firebaseapp.com',
  databaseURL: 'https://skribdigitaweb.firebaseio.com',
  storageBucket: 'skribdigitaweb.appspot.com'
};
firebase.initializeApp(config);
var database = firebase.database();

var contactUsForm = document.getElementById('contactus-form');
var contactUsSuccess = document.getElementById('contactus-success');
var contactUsError = document.getElementById('contactus-error');
var contactUsBtn = document.getElementById('contactus-button');
var onContactUsComplete = function(error) {
  contactUsBtn.disabled = false;
  if (error) {
    contactUsError.innerHTML = 'Sorry. Sending your message failed. Please try again.';
  } else {
    contactUsSuccess.innerHTML = 'Thanks for contacting us!';
    // hide the form
    contactUsForm.style.display = 'none';
  }
};
function sendContactUs(formObj) {
  // Store emails to firebase
  var result = firebase.database().ref('contactus').push({
    name: formObj.name.value,
    email: formObj.email.value,
    message: formObj.message.value
  })
  onContactUsComplete(false);
  contactUsBtn.disabled = true;
  return false;
}
