window.onload = function(){
    const player = document.querySelector('#player')

    async function call(){
        const url = new URLSearchParams(location.search);
        if(!url.has('album')) {
            location.href = '/'
            return
        }

        const id = url.get('album');

        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`);
        const data = await response.json();

        let temp = document.getElementsByTagName("template")[0];
        if (!temp) {
            console.error("Il template non è stato trovato nel DOM.");
            return;
        }
        let clone = temp.content.cloneNode(true);
        
        const image = clone.querySelector('.image')
        const trackName = clone.querySelector('.track-name')
        const albumName = clone.querySelector('.album-name')
        const artistName = document.querySelector('.artist-name')
        const play = document.querySelector('.play')
        const pause = document.querySelector('.pause')

        image.src = data.cover_medium
        trackName.textContent = data.tracks.data[0].title
        artistName.textContent = data.artist.name
        albumName.textContent = data.title

        target.appendChild(clone);

        play.addEventListener('click',()=>{
            player.src = data.tracks.data[0].preview
            player.load()    
            player.play()
        })

        pause.addEventListener('click',()=>{
            player.pause()
        })

        target.append(clone)
    }
    call()

}