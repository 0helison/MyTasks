const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('mytasks', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conectado ao MySQL')
} catch (error) {
    console.log('Não foi possível conectar ao MySQL')
}

module.exports = sequelize