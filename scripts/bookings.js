/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function navFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myfunc(event){
  event.preventDefault();

  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var d1 = document.getElementById("d1").value;
  var time = document.getElementById("time").value;
  var freeform = document.getElementById("freeform").value;
  var address = document.getElementById("address").value;

  localStorage.setItem('ls_username', username);
  localStorage.setItem('ls_email', email);
  localStorage.setItem('ls_d1', d1);
  localStorage.setItem('ls_time', time);
  localStorage.setItem('ls_freeform', freeform);
  localStorage.setItem('ls_address', address);


}



                  

/* Integrating Google Translate into the navigation bar */

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: 'en' },
    'google_translate_element'
  );
}