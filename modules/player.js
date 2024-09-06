let canzoni = [];
let indiceCanzone = 0;
const playBtn = document.querySelector("#play ion-icon");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const trackTitle = document.getElementById("track-title");
const trackArtist = document.getElementById("track-artist");
const trackImage = document.querySelector(".player-bar img");

fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`)
  .then((response) => response.json())
  .then((data) => {
    canzoni = data.data.map((track) => ({
      preview: track.preview,
      title: track.title,
      artist: track.artist.name,
      image: track.album.cover_small,
    }));
    if (canzoni.length > 0) {
      console.log(canzoni);

      let audio = new Audio(canzoni[indiceCanzone].preview);

      function updateTrackDetails() {
        trackTitle.textContent = canzoni[indiceCanzone].title;
        trackArtist.textContent = canzoni[indiceCanzone].artist;
        trackImage.src = canzoni[indiceCanzone].image;
      }

      updateTrackDetails();

      function PlayPause() {
        if (audio.paused) {
          audio.play();
          playBtn.setAttribute("name", "pause-circle");
        } else {
          audio.pause();
          playBtn.setAttribute("name", "play-circle");
        }
      }

      function nextTrack() {
        audio.pause();
        indiceCanzone = (indiceCanzone + 1) % canzoni.length;
        audio = new Audio(canzoni[indiceCanzone].preview);
        audio.play();
        playBtn.setAttribute("name", "pause-circle");
        updateTrackDetails();
      }

      function prevTrack() {
        audio.pause();
        indiceCanzone = (indiceCanzone - 1 + canzoni.length) % canzoni.length;
        audio = new Audio(canzoni[indiceCanzone].preview);
        audio.play();
        playBtn.setAttribute("name", "pause-circle");
        updateTrackDetails();
      }

      document
        .getElementById("play")
        .addEventListener("click", PlayPause);
      nextBtn.addEventListener("click", nextTrack);
      prevBtn.addEventListener("click", prevTrack);
    }
  })
  .catch((error) => console.error("Errore nel recupero dei dati:", error));