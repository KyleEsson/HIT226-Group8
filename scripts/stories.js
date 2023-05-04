/* Function to check if local storage is supported */
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&
            // everything except Firefox
            (e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === "QuotaExceededError" ||
                // Firefox
                e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        );
    }
}

if (storageAvailable("localStorage")) {
    // Yippee! We can use localStorage awesomeness
    console.log("localStorage is supported");
} else {
    // Too bad, no localStorage for us
    console.log("localStorage is not supported");
}



/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
const openButton = document.querySelector('[data-open-modal]');
const closeButton = document.querySelector('[closeShare]');
const modal = document.querySelector('[data-modal]');

openButton.addEventListener('click', () => {
    modal.showModal();
})

closeButton.addEventListener('click', () => {
    modal.close();
})



function submitStory() {
    const shareName = document.getElementById('shareName');
    const name = shareName.value;
    const shareStory = document.getElementById('shareStory');
    const story = shareStory.value;
    const divElement = document.createElement('div');
    divElement.classList.add('storyCard');
    divElement.innerHTML = '<h4>' + name + '</h4>';
    const storyPost = `<p>` + story + `</p>`;
    divElement.insertAdjacentHTML('beforeend', storyPost);
    const subject = document.querySelector(".storyCards");
    subject.appendChild(divElement);
    modal.close();

}
