// IMPORT 
import {artists, getRandomColor, loadAlbums} from "./modules/home.js"
import {getAlbum} from "./modules/album.js"

// VARIABILE PER IL CONTROLLO DELL'URL
const url = new URLSearchParams(location.search);

// SE URL CONTIENE IL QUERY PARAMS "SEARCH" ALLORA ESEGUI IL CODICE GET ALBUM, ALTRIMENTI IL CODICE DI CREASZIONE DELLE CARD ARTIST
if(url.has('search')) {
    getAlbum();
} else {
    getRandomColor();
    loadAlbums(artists);
}

