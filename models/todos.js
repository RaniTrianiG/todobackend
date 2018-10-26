const {sequelize, Sequelize} = require('../connection/connect');

const Todoapp = sequelize.define('todoapp', {
    name: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    }
})

module.exports = Todoapp;