const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Song extends Model { }

Song.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false
  },
  likes: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
}, { sequelize, modelName: 'song' })

module.exports = Song
