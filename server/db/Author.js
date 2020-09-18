const Sequelize = require('sequelize')
const db = require('./database')

module.exports = db.define('author', {
    name: {
        type: Sequelize.STRING,
        allowNull: false, 
    },

    status: {
        type: Sequelize.STRING,
        validate: {
            isIn: [['basic', 'level two', 'goddess']]
        },
        defaultValue: 'basic'
    }
})