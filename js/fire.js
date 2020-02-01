function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
$.fn.getFormData = function() {
  var fields = this.find('[name]');
  var result = {};
  $.each(fields, function (i, el) {
    result[el.name] = el.value;
  });
  return result;
};
var config = {
  apiKey: "AIzaSyDch-H8LQ4f4yNPvAUqLMxEGNcPsVu7LKQ",
  authDomain: "botonrosa-771f0.firebaseapp.com",
  databaseURL: "https://botonrosa-771f0.firebaseio.com",
  projectId: "botonrosa-771f0",
  storageBucket: "botonrosa-771f0.appspot.com",
  messagingSenderId: "462138074311"
};
var fb = firebase.initializeApp(config);
var user_id;
$('.submit').on('click', function (e) {
  e.preventDefault();
  var updates = {};
  user_id = uuidv4();
  //user_id = user_id ? user_id : fb.database().ref().child('contact_us').push().key;
  updates[user_id] = $('form').getFormData();
  fb.database().ref().child('contact_us/web/').update(updates);
  console.log(uuidv4());
});
