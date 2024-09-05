import {artists, getRandomColor, loadAlbums} from "./modules/home.js"
import {getAlbum} from "./modules/album.js"

const url = new URLSearchParams(location.search);

if(url.has('search')) {
    getAlbum();
}

getRandomColor();
loadAlbums(artists);