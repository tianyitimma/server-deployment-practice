'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');


const foodModel = require('./food.js');
const clothesModel = require('./clothes.js');

let DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';


const options = process.env.NODE_ENV === 'production'
  ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
  : {};

const sequelize = new Sequelize(DATABASE_URL, options);

const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  food,
  clothes,
};