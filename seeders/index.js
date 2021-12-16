const { Song } = require('../models')

async function seedData () {
  console.log('----Seeding Data----')

  await Song.bulkCreate(require('./songSeed.js'))

  console.log('----Data Seeded----')

  process.exit()
}

seedData()
