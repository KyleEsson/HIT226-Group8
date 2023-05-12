/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function navFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const moodBox = document.querySelector('.mood-box');
const moodButtons = moodBox.querySelectorAll('.mood-button');
const selectedMood = moodBox.querySelector('.selected-mood');
const submitButton = moodBox.querySelector('.submit-button');

moodButtons.forEach(button => {
  button.addEventListener('click', () => {
    // remove selected class from previously selected button (if any)
    const prevSelected = moodBox.querySelector('.selected');
    if (prevSelected) {
      prevSelected.classList.remove('selected');
    }
    // add selected class to the clicked button
    button.classList.add('selected');
    // update the selected mood text
    selectedMood.textContent = `You are feeling ${button.dataset.mood} today.`;
  });
});

submitButton.addEventListener('click', () => {
  const selectedButton = moodBox.querySelector('.selected');
  if (selectedButton) {
    const selectedMoodValue = selectedButton.dataset.mood;
    // TODO: add code to submit the selected mood value to a database or server
    alert(`${selectedMoodValue} has been submitted!`);
  } else {
    alert('Please select a mood before submitting.');
  }
});

function displaySearch() {
  alert('About clicked');
}

function displayFeatured() {
  alert('Featured therapists clicked');
}

function displayTestimonials() {
  alert('Services clicked');
}

function displayServices() {
  alert('Contat us clicked');
}


/* Integrating Google Translate into the navigation bar */

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: 'en' },
    'google_translate_element'
  );
}


// On page reload, search localStorage for story data
document.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem('storyData')) {

    // parse localStorage data to JS object
    storyData = JSON.parse(localStorage.getItem('storyData'));

    // loop through storyData array and display each story
    for (let i = storyData.length - 3; i < storyData.length; i++) {
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