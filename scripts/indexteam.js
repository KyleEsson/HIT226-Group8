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

function increaseCounter(mood) {
  if (mood === 'happy') {
    happyCount++;
    document.querySelector('.happy-counter').textContent = 'Happy: ' + happyCount;
  } else if (mood === 'neutral') {
    // Do nothing
  } else if (mood === 'sad') {
    sadCount++;
    document.querySelector('.sad-counter').textContent = 'Sad: ' + sadCount;
  }
}

function decreaseCounter(mood) {
  if (mood === 'happy') {
    happyCount--;
    document.querySelector('.happy-counter').textContent = 'Happy: ' + happyCount;
  } else if (mood === 'neutral') {
    // Do nothing
  } else if (mood === 'sad') {
    sadCount++;
    document.querySelector('.sad-counter').textContent = 'Sad: ' + sadCount;
  }
}

function submitMood() {
  const moodData = {
    happy: happyCount,
    sad: sadCount
  };
  localStorage.setItem('moodData', JSON.stringify(moodData));
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


// // On page reload, search localStorage for story data
// document.addEventListener('DOMContentLoaded', function () {
//   if (localStorage.getItem('storyData')) {

//     // parse localStorage data to JS object
//     storyData = JSON.parse(localStorage.getItem('storyData'));

//     // loop through storyData array and display each story
//     for (let i = storyData.length - 3; i < storyData.length; i++) {
//       console.log(storyData[i].name);
//       console.log(storyData[i].story);

//       // create cards for displaying stories
//       const divElement = document.createElement('div');
//       divElement.classList.add('storyCard');
//       divElement.innerHTML = '<img src="images/' + storyData[i].avatar + '.png" alt="Avatar">';
//       const namePost = `<h3>` + storyData[i].name + `<h3>`;
//       divElement.insertAdjacentHTML('beforeend', namePost);
//       const storyPost = `<p>` + storyData[i].story + `</p>`;
//       divElement.insertAdjacentHTML('beforeend', storyPost);
//       const subject = document.querySelector(".storyCards");
//       subject.appendChild(divElement);
//     }
//   }
// });
