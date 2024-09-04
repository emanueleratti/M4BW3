let canzoni = [];
let indiceCanzone = 0;

fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=queen')
    .then(response => response.json())
    .then(data => {
        
        canzoni = data.data.map(track => track.preview);
        if (canzoni.length > 0) {
            const audio = document.getElementById('mp3');
            audio.src = canzoni[indiceCanzone]; 
        }
    });




const audio = document.getElementById("mp3");
audio.src = canzoni[indiceCanzone];

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function cambiaCanzone() {
  indiceCanzone = (indiceCanzone + 1) % canzoni.length;
  audio.src = canzoni[indiceCanzone];
  audio.play();
}

function canzonePrecedente() {
  indiceCanzone = (indiceCanzone - 1 + canzoni.length) % canzoni.length;
  audio.play();
}

document.getElementById("playButton").addEventListener("click", playAudio);
document.getElementById("pauseButton").addEventListener("click", pauseAudio);
document.getElementById("nextButton").addEventListener("click", cambiaCanzone);
document.getElementById("prevButton").addEventListener("click", canzonePrecedente);
