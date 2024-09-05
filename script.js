import {artists, getRandomColor, loadAlbums} from "./modules/home.js"
import {getAlbum, goToSongsPage} from "./modules/album.js"

const url = new URLSearchParams(location.search);

if(url.has('search')) {
    alert("Ciao")
    getAlbum();
    goToSongsPage(album);
}

getRandomColor();
loadAlbums(artists);





