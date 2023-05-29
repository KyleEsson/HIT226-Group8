/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function navFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}



//Mark Fergusson Details
const cont_open = document.querySelector("#open-contact")
const cont_close = document.querySelector("#close-contact")
const cont_modal = document.querySelector("#contact-modal")

cont_open.addEventListener("click", () => {
    cont_modal.showModal()
})

cont_close.addEventListener("click", () => {
    cont_modal.close()
})


//Olivia Edwards Details
const olivia_open = document.querySelector("#open-olivia")
const olivia_close = document.querySelector("#close-olivia")
const olivia_modal = document.querySelector("#contact-olivia")

olivia_open.addEventListener("click", () => {
    olivia_modal.showModal()
})

olivia_close.addEventListener("click", () => {
    olivia_modal.close()
})


//Malcom Woods Details
const malcom_open = document.querySelector("#open-malcom")
const malcom_close = document.querySelector("#close-malcom")
const malcom_modal = document.querySelector("#contact-malcom")

malcom_open.addEventListener("click", () => {
    malcom_modal.showModal()
})

malcom_close.addEventListener("click", () => {
    malcom_modal.close()
})

//Liam Higgins Details
const liam_open = document.querySelector("#open-liam")
const liam_close = document.querySelector("#close-liam")
const liam_modal = document.querySelector("#contact-liam")

liam_open.addEventListener("click", () => {
    liam_modal.showModal()
})

liam_close.addEventListener("click", () => {
    liam_modal.close()
})


//Tina Risitas Details
const tina_open = document.querySelector("#open-tina")
const tina_close = document.querySelector("#close-tina")
const tina_modal = document.querySelector("#contact-tina")

tina_open.addEventListener("click", () => {
    tina_modal.showModal()
})

tina_close.addEventListener("click", () => {
    tina_modal.close()
})


