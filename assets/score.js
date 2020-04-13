const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

console.log(highScores);



function populateStorage() {
    var arraySavedScores = ["initials", storeInitials, "score", scoreFinal];
    localStorage.setItem();
    arraySavedScores = JSON.parse(localStorage.getItem("arraySavedScores"));
  }