async function getSongs() {
  const { data: songs } = await axios.get('/api/songs')
  return songs
}

async function createSong(data) {
  const { data: song } = await axios.post('/api/songs', data)
  return song
}

document.getElementById('createSong').addEventListener('click', async function (event) {
  event.preventDefault()
  const song = await createSong({
    title: document.getElementById('title').value,
    description: document.getElementById('description').value,
    link: document.getElementById('link').value
  })

  const songElem = document.createElement('div')
  songElem.innerHTML = `
        <h3>${song.title}</h3>
        <h5><a href="${song.link}">YouTube Link</a></h5>
        <p>${song.description}</p>
        <hr>
      `
  document.getElementById('songs').append(songElem)
})

async function renderSongs() {
  const songs = await getSongs()
  songs.forEach(song => {
    const songElem = document.createElement('div')
    songElem.innerHTML = `
        <h3>${song.title}</h3>
        <h5><a href="${song.link}">YouTube Link</a></h5>
        <p>${song.description}</p>
        <hr>
      `
    document.getElementById('songs').append(songElem)
  })
}

renderSongs()