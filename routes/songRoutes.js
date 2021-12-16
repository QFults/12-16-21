const router = require('express').Router()
const { Song } = require('../models')

router.get('/songs', async function (req, res) {
  const songs = await Song.findAll()
  res.json(songs)
})

router.post('/songs', async function (req, res) {
  const song = await Song.create(req.body)
  res.json(song)
})

module.exports = router
