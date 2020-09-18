const Sequelize = require('sequelize');
const db = require('./database');

module.exports = db.define('message', {
    name: {
        type: Sequelize.STRING,
        allowNull: true, 
    },

    content: {
        type: Sequelize.TEXT,
        allowNull: false,     }
})