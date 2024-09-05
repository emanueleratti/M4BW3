export function getAlbum() {

const urlParams = new URLSearchParams(window.location.search);
const artist = urlParams.get('artist');

if (artist) {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${artist}/albums`)
    .then(response => response.json())
    .then(data => {
        const albums = data.data; 
        const albumContainer = document.getElementById('main-target');

        albums.forEach(album => {
            const col = document.createElement('div');
            col.classList.add('col-md-4');
            
            const card = document.createElement('div');
            card.classList.add('card', 'h-100');

            const img = document.createElement('img');
            img.src = album.cover_medium;
            img.classList.add('card-img-top');
            img.alt = album.title;
            card.appendChild(img);

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const cardTitle = document.createElement('h5');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = album.title;
            cardBody.appendChild(cardTitle);

            const button = document.createElement('button');
            button.classList.add('btn', 'btn-primary');
            button.textContent = "Vedi canzoni";
            button.onclick = function () {
                goToSongsPage(album.id);
            };
            cardBody.appendChild(button);
            
            card.appendChild(cardBody);

            col.appendChild(card);
            
            albumContainer.appendChild(col);
        });
    })
    .catch(error => {
        console.error('Errore nel caricamento dei dati:', error);
    });
} else {
    console.error('ID artista non trovato nella query string');
}
};

export function goToSongsPage(album) {
    window.location.href = `songs.html?albumId=${album}`;
}