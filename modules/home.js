export const artists = [
  'queen',
  'beatles',
  'michael jackson',
  'madonna',
  'adele',
  'coldplay',
  'beyonce',
  'taylor swift',
  'drake',
  'rihanna',
  'ed sheeran',
  'eminem',
  'u2',
  'bruno mars',
  'ariana grande',
  'billie eilish',
  'post malone',
  'the weeknd',
  'dua lipa',
  'acdc'
];

export function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export async function loadAlbums(artists) {
  const albumContainer = document.getElementById('main-target');

  artists.forEach(async (artist) => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`);
      let data = await response.json();
      let album = data.data[0];

      console.log(album);

      let cardDiv = document.createElement('div');
      cardDiv.className = 'col';

      let albumLink = document.createElement('a');
      albumLink.href = album.link;
      albumLink.className = 'card h-100 ratio ratio-16x9 cardCustom card-container';

      albumLink.style.backgroundColor = getRandomColor();

      let cardBodyDiv = document.createElement('div');
      cardBodyDiv.className = 'card-body p-2 p-md-2 p-lg-3 cardPositioning';

      let albumTitle = document.createElement('h5');
      albumTitle.className = 'card-title fontSizeCustom';
      albumTitle.innerText = album.artist.name;

      cardBodyDiv.appendChild(albumTitle);

      let imgDiv = document.createElement('div');
      imgDiv.className = 'imgcustom p-2 album-cover';

      let img = document.createElement('img');
      img.src = album.album.cover_medium;
      img.alt = album.title;
      img.className = 'img-fluid';

      imgDiv.appendChild(img);

      albumLink.appendChild(cardBodyDiv);
      albumLink.appendChild(imgDiv);

      cardDiv.appendChild(albumLink);

      albumContainer.appendChild(cardDiv);
    } catch (error) {
      console.error("Errore nel caricamento dell'artista:", artist, error);
    }
  });
}