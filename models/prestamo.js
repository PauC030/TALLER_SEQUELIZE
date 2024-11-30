// prestamo.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Libro = require('./libro');
const Usuario = require('./usuario');

const Prestamo = sequelize.define('Prestamo', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    libroId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Libro',  // Asegúrate de que 'Libro' sea un modelo Sequelize
            key: 'id',
        },
    },
    usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Usuario',  // Asegúrate de que 'Usuario' sea un modelo Sequelize
            key: 'id',
        },
    },
    fechaPrestamo: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    fechaDevolucion: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: 'prestamos',
    timestamps: false,
});

Prestamo.belongsTo(Libro, { foreignKey: 'libroId' });
Prestamo.belongsTo(Usuario, { foreignKey: 'usuarioId' });

module.exports = Prestamo;
