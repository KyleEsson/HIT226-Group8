/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function navFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
  let happyCount = 0;
  let sadCount = 0;
  let selectedMood = '';
  
  function setMood(mood) {
    selectedMood = mood;
    document.querySelectorAll('.mood').forEach((mood) => {
      mood.classList.remove('selected');
    });
    document.querySelector(`#${mood}-mood`).classList.add('selected');
  }
  
  function submitMood() {
    if (selectedMood === 'happy') {
      happyCount++;
      document.querySelector('#happy-count').innerText = happyCount;
    } else if (selectedMood === 'sad') {
      sadCount++;
      document.querySelector('#sad-count').innerText = sadCount;
    }
    selectedMood = '';
    document.querySelectorAll('.mood').forEach((mood) => {
      mood.classList.remove('selected');
    });
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
