/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

const wrapper = document.querySelector(".wrapper"),
              signupHeader = document.querySelector(".signup header"),
              loginHeader = document.querySelector(".login header");
            loginHeader.addEventListener("click", () => {
              wrapper.classList.add("active");
            });
            signupHeader.addEventListener("click", () => {
              wrapper.classList.remove("active");
            });




/* Integrating Google Translate into the navigation bar */

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
      {pageLanguage: 'en'},
      'google_translate_element'
  );
}