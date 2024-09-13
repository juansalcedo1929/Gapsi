const express = require('express');
const Item = require('./models/Item');

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Obtener un item por ID
app.get('/Items/:id', async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: 'Item no encontrado' });
    }
  } catch (error) {
    console.error('Error al obtener el item:', error); // Log del error en consola
    res.status(500).json({ message: 'Error interno del servidor', error: error.message }); // Devuelve el mensaje del error
  }
});

// Actualizar la descripción y modelo de un item
app.put('/Items/:id', async (req, res) => {
  try {
    const { descripcion, modelo } = req.body;
    const item = await Item.findByPk(req.params.id);
    if (item) {
      item.descripcion = descripcion || item.descripcion;
      item.modelo = modelo || item.modelo;
      await item.save();
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: 'Item no encontrado' });
    }
  } catch (error) {
    console.error('Error al actualizar el item:', error); // Log del error en consola
    res.status(500).json({ message: 'Error interno del servidor', error: error.message }); // Devuelve el mensaje del error
  }
});

// Middleware para manejar rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
