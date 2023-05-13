// Function to check if local storage is supported
if (typeof (Storage) !== "undefined") {
    console.log("localStorage is supported");
} else {
    console.log("localStorage is not supported");
}

// Toggle between showing and hiding the navigation menu 
function navFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
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
    let intro = document.querySelector('#shareIntro').value;

    let storyDataObject = {
        name: name,
        avatar: avatar,
        intro: intro,
        story: story,
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
        storyData = JSON.parse(localStorage.getItem('storyData'));

        // loop through storyData array and display each story
        for (let i = 0; i < storyData.length; i++) {
            console.log(storyData[i].name);
            console.log(storyData[i].story);

            // create cards for displaying stories
            const divElement = document.createElement('div');
            divElement.classList.add('storyCard');
            divElement.onclick = function () {
                const modalElement = document.createElement('dialog');
                modalElement.classList.add('storyModal');
                modalElement.innerHTML = '<button class="shareClose" id="storyClose" onclick="closeStory()" ><i class="fa fa-close"></i></button>';
                const img = '<img src="images/' + storyData[i].avatar + '.png" alt="Avatar">';
                modalElement.insertAdjacentHTML('beforeend', img);
                const namePost = `<h3>` + storyData[i].name + `<h3>`;
                modalElement.insertAdjacentHTML('beforeend', namePost);
                const storyPost = `<p>` + storyData[i].story + `</p>`;
                modalElement.insertAdjacentHTML('beforeend', storyPost);
                const object = document.querySelector(".storyModals");
                object.appendChild(modalElement);
                const storyModal = document.querySelector('.storyModal');
                storyModal.showModal();
            }
            divElement.innerHTML = '<img src="images/' + storyData[i].avatar + '.png" alt="Avatar">';
            const namePost = `<h3>` + storyData[i].name + `<h3>`;
            divElement.insertAdjacentHTML('beforeend', namePost);
            const storyPost = `<p>` + storyData[i].intro + `</p>`;
            divElement.insertAdjacentHTML('beforeend', storyPost);
            const readStory = '<button class="readStory">Read Story</button>';
            divElement.insertAdjacentHTML('beforeend', readStory);
            const subject = document.querySelector(".storyCards");
            subject.appendChild(divElement);
        }
    }
});

function closeStory() {
    location.reload()
}


/* Integrating Google Translate into the navigation bar */

// NOT CURRENTLY WORKING

// function googleTranslateElementInit() {
//     new google.translate.TranslateElement(
//         { pageLanguage: 'en' },
//         'google_translate_element'
//     );
// }