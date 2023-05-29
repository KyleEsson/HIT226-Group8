// Function to check if local storage is supported
if (typeof (Storage) !== "undefined") {
    console.log("localStorage is supported");
} else {
    console.log("localStorage is not supported");
}

// Toggle between showing and hiding the navigation menu 
function navFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";
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

// Retreive error elements for form validation
const nameError = document.getElementById('errorName');
const storyError = document.getElementById('errorStory');
const introError = document.getElementById('errorIntro');

// array for storing stories
let storyData = [];

// function for when post button is clicked
function submitStory() {
    let name = document.querySelector('#shareName').value;
    let story = document.querySelector('#shareStory').value;
    let avatar = document.querySelector('#shareSelect').value;
    let intro = document.querySelector('#shareIntro').value;

    // Validation
    let errorCount = 0;

    if (name === "") {
        nameError.innerHTML = "Please enter your name";
        errorCount++;
    }
    else if (nameError.innerHTML !== "") {
        nameError.innerHTML = "";
    }

    if (story === "") {
        storyError.innerHTML = "Please enter your story";
        errorCount++;
    }
    else if (storyError.innerHTML !== "") {
        storyError.innerHTML = "";
    }

    if (intro === "") {
        introError.innerHTML = "Please enter your intro";
        errorCount++;
    }
    else if (introError.innerHTML !== "") {
        introError.innerHTML = "";
    }

    if (errorCount > 0) {
        return;
    }

    let storyDataObject = {
        name: name,
        avatar: avatar,
        intro: intro,
        story: story,
    };

    storyData.push(storyDataObject);

    // store story data in localStorage
    localStorage.setItem('storyData', JSON.stringify(storyData));

    // close modal and reload page
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

            // create cards for displaying stories
            const divElement = document.createElement('div');
            divElement.classList.add('storyCard');
            divElement.onclick = function () {
                const modalElement = document.createElement('dialog');
                modalElement.classList.add('storyModal');
                modalElement.setAttribute("data-backdrop", "static");
                modalElement.setAttribute("data-keyboard", "false");
                modalElement.innerHTML = `<div class="storyWave">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill">
                            </path>
                        </svg>
                    </div>`;
                const img = '<img src="images/' + storyData[i].avatar + '.png" alt="Avatar">';
                modalElement.insertAdjacentHTML('beforeend', img);
                const namePost = `<h3>` + storyData[i].name + `<h3>`;
                modalElement.insertAdjacentHTML('beforeend', namePost);
                const storyPost = `<p>` + storyData[i].story + `</p>`;
                modalElement.insertAdjacentHTML('beforeend', storyPost);
                const closeStory = '<button class="closeStory" onclick="closeStory()">Close Story</button>';
                modalElement.insertAdjacentHTML('beforeend', closeStory);
                const modWave = `<div class="storyBottomWave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path
                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    class="nav-shape-fill"
                    ></path>
                    </svg>
                </div>`;
                modalElement.insertAdjacentHTML('beforeend', modWave);
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

