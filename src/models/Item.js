const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Item = sequelize.define('Item', {
  id: {
    type: DataTypes.STRING(10),
    allowNull: false,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING(200),
    allowNull: true
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  modelo: {
    type: DataTypes.STRING(10),
    allowNull: true
  }
}, {
  // Definir explícitamente el nombre de la tabla
  tableName: 'Items',
  timestamps: false // Si no estás usando timestamps en tu tabla
});

module.exports = Item;
