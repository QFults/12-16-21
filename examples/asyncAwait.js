const { Song } = require('../models')

// const getSongs = () => {
//   let mySongs = []
//   Song.findAll()
//   .then(songs => mySongs = songs)
//   .catch(err => console.log(err))
//   return mySongs
// }

async function getSongs () {
  const songs = await Song.findAll()
  return songs
}

getSongs()
  .then(songs => console.log(songs))
