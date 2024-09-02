window.onload = () => {
    const searchButton = document.querySelector("#button-search")

    async function call(){
      const searchQuery = document.querySelector("#search-input").value;

      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchQuery}`) 
      const result = await response.json()

      console.log(result)

      const target = document.querySelector("#target")
      target.innerHTML = "";

      const searchedArtist = document.querySelector(".searched-artist")
      const searchedArtistBox = document.getElementById("searched-artist-box")
      searchedArtist.innerHTML = `${searchQuery}`
      searchedArtistBox.classList.remove("d-none")

      result.data.forEach(element => {
        let temp = document.getElementsByTagName("template")[0];
        if (!temp) {
            console.error("Il template non è stato trovato nel DOM.");
            return;
        }
        let clone = temp.content.cloneNode(true);
        
        const artistLink = clone.querySelector('.artist-link')
        const image = clone.querySelector('.image')
        const albumName = clone.querySelector('.album-name')
        const artistName = clone.querySelector('.artist-name')

        artistLink.href = `details.html?album=${element.album.id}`
        image.src = element.album.cover_medium
        albumName.textContent = element.album.title
        artistName.textContent = element.artist.name

        target.appendChild(clone);
      })
    }
  searchButton.addEventListener("click", () => {
    call()
  })
}