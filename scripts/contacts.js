/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

/* Integrating Google Translate into the navigation bar */

function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {pageLanguage: 'en'},
        'google_translate_element'
    );
}

/* The contacts list button to show a menu listing each specialist page */
function contactFunction() {
    var contact_link = document.getElementById("f_link");
    if (contact_link.style.display === "block") {
        contact_link.style.display = "none";
    } else {
        contact_link.style.display = "block";
    }
}