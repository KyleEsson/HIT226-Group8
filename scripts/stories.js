// Function to check if local storage is supported
if (typeof (Storage) !== "undefined") {
    console.log("localStorage is supported");
} else {
    console.log("localStorage is not supported");
}

// Toggle between showing and hiding the navigation menu 
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// Toggle between showing and hiding the story modal
const openButton = document.querySelector('#data-open-modal');
const closeButton = document.querySelector('#closeShare');
const modal = document.querySelector('#data-modal');

openButton.addEventListener('click', () => {
    modal.showModal();
})

closeButton.addEventListener('click', () => {
    modal.close();
})

// array for storing stories
let storyData = [];

// function for when post button is clicked
function submitStory() {
    let name = document.querySelector('#shareName').value;
    let story = document.querySelector('#shareStory').value;
    let avatar = document.querySelector('#shareSelect').value;

    let storyDataObject = {
        name: name,
        story: story,
        avatar: avatar,
    };

    storyData.push(storyDataObject);

    // store story data in localStorage
    localStorage.setItem('storyData', JSON.stringify(storyData));

    modal.close();
    location.reload()
}

// On page reload, search localStorage for story data
document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('storyData')) {

        // parse localStorage data to JS object
        storyData = JSON.parse(localStorage.getItem('storyData')); // get the saved data from localStorage

        // loop through storyData array and display each story
        for (let i = 0; i < storyData.length; i++) {
            console.log(storyData[i].name);
            console.log(storyData[i].story);

            // create cards for displaying stories
            const divElement = document.createElement('div');
            divElement.classList.add('storyCard');
            divElement.innerHTML = '<img src="images/' + storyData[i].avatar + '.png" alt="Avatar">';
            const namePost = `<h3>` + storyData[i].name + `<h3>`;
            divElement.insertAdjacentHTML('beforeend', namePost);
            const storyPost = `<p>` + storyData[i].story + `</p>`;
            divElement.insertAdjacentHTML('beforeend', storyPost);
            const subject = document.querySelector(".storyCards");
            subject.appendChild(divElement);
        }
    }
});