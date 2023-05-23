// Get the happy and sad buttons
const happyBtn = document.getElementById("happyBtn");
const sadBtn = document.getElementById("sadBtn");

// Get the happy and sad count elements
const happyCount = document.getElementById("happyCount");
const sadCount = document.getElementById("sadCount");

// Get the total mood score element
const totalScore = document.getElementById("totalScore");

// Get the percent bar and fill element
const percentBarFill = document.getElementById("percentBarFill");

// Get the message element
const message = document.getElementById("message");

// Get the user name input field and error message
const userNameInput = document.getElementById("userNameInput");
const userNameError = document.getElementById("userNameError");

// Get the submit, refresh, and export buttons
const submitBtn = document.getElementById("submitBtn");
const refreshBtn = document.getElementById("refreshBtn");
const exportBtn = document.getElementById("exportBtn");

// Initialize the counts, total score, and selected moods
let happy = 0;
let sad = 0;
let score = 0;
let selectedMoods = [];

// Array to store the submitted data
let data = [];

// Update the count and total score display
function updateDisplay() {
    happyCount.textContent = happy;
    sadCount.textContent = sad;
    totalScore.textContent = score;
}

// Enable or disable the submit button based on the selected moods and user name
function toggleSubmitButton() {
    if (selectedMoods.length === 0 || userNameInput.value === "") {
        submitBtn.disabled = true;
    } else {
        submitBtn.disabled = false;
    }
}

// Function to select a mood
function selectMood(mood) {
    if (!selectedMoods.includes(mood)) {
        selectedMoods.push(mood);
        toggleSubmitButton();
    }
}

// Function to submit the selected moods
function submitMood() {
    selectedMoods.forEach(mood => {
        if (mood === 'happy') {
            happy++;
            score++;
        } else if (mood === 'sad') {
            sad++;
            score--;
        }

        // Store the submitted mood and user name in data array
        const userName = userNameInput.value;
        data.push({ mood: mood, userName: userName });
    });

    selectedMoods = [];
    toggleSubmitButton();
    updateDisplay();
    updatePercentBar();
    updateMessage();
    userNameInput.value = "";
    userNameError.style.display = "none";
}

// Function to update the percent bar
function updatePercentBar() {
    const totalMoods = happy + sad;
    const happyPercent = totalMoods > 0 ? (happy / totalMoods) * 100 : 0;
    percentBarFill.style.width = `${happyPercent}%`;
}

// Function to update the message
function updateMessage() {
    if (sad > happy) {
        message.textContent = "Sorry to hear that you're sad.";
    } else if (happy > sad) {
        message.textContent = "We're glad that you're happy!";
    } else {
        message.textContent = "";
    }
}

// Function to refresh the mood tracker
function refreshMood() {
    happy = 0;
    sad = 0;
    score = 0;
    selectedMoods = [];
    toggleSubmitButton();
    updateDisplay();
    updatePercentBar();
    updateMessage();
    userNameInput.value = "";
    userNameError.style.display = "none";
}

// Function to export the data as a CSV file
function exportData() {
    let csvContent = "data:text/csv;charset=utf-8,"
        + "Mood,User Name\r\n";

    data.forEach(entry => {
        csvContent += `${entry.mood},${entry.userName}\r\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "mood_data.csv");
    document.body.appendChild(link); // Required for Firefox
    link.click();
}
