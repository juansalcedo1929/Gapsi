# Documentación del Proyecto

## Servicios y Configuraciones del Servicio de Nube

### AWS Elastic Beanstalk
- **Nombre del Entorno:** Server
- **URL del Entorno:** http://server-env.eba-rki6xxyb.us-east-2.elasticbeanstalk.com

### Base de Datos
- **Tipo:** MySQL
- **Nombre de la Base de Datos:** articulos_db
- **Nombre de la Tabla:** Items

### Variables de Entorno
Asegúrate de configurar las siguientes variables en tu archivo `.env`:
- DB_NAME=articulos_db
- DB_USER=your_db_user
- DB_PASSWORD=your_db_password
- DB_HOST=your_db_host
- DB_PORT=3306

## Servicios de la API

### Obtener un Artículo por ID
- **Método:** GET
- **Endpoint:** /Items/{id}
- **Descripción:** Obtiene la información de un artículo específico mediante su ID.
- **Ejemplo de Solicitud:**
  GET http://server-env.eba-rki6xxyb.us-east-2.elasticbeanstalk.com/Items/1234567890

- **Respuesta Exitosa (200 OK):**
  {
    "id": "1234567890",
    "nombre": "Artículo 1",
    "descripcion": "Descripción del artículo 1",
    "precio": 99.99,
    "modelo": "Modelo1"
  }

- **Respuesta de Error (404 Not Found):**
  {
    "message": "Item no encontrado"
  }

### Actualizar la Descripción y Modelo de un Artículo
- **Método:** PUT
- **Endpoint:** /Items/{id}
- **Descripción:** Actualiza la descripción y el modelo de un artículo específico.
- **Ejemplo de Solicitud:**
  PUT http://server-env.eba-rki6xxyb.us-east-2.elasticbeanstalk.com/Items/1234567890

- **Cuerpo de la Solicitud (Body) en formato JSON:**
  {
    "descripcion": "Descripción actualizada del artículo",
    "modelo": "Actualizado"
  }

- **Respuesta Exitosa (200 OK):**
  {
    "id": "1234567890",
    "nombre": "Artículo 1",
    "descripcion": "Descripción actualizada del artículo",
    "precio": 99.99,
    "modelo": "Actualizado"
  }

- **Respuesta de Error (404 Not Found):**
  {
    "message": "Item no encontrado"
  }

## Pasos para la Ejecución del Servicio

1. Clona el Repositorio:
   `git clone https://github.com/juansalcedo1929/nodetest.git`

2. Instala las dependencias:
   `npm install`

3. Configura las Variables de Entorno:
   Crea un archivo `.env` en la raíz del proyecto y añade las variables necesarias:
   - DB_NAME=articulos_db
   - DB_USER=your_db_user
   - DB_PASSWORD=your_db_password
   - DB_HOST=your_db_host
   - DB_PORT=3306

4. Despliega en AWS Elastic Beanstalk:
   - Empaqueta el proyecto en un archivo `.zip`.
   - Usa el CLI de Elastic Beanstalk o la consola de AWS para subir y desplegar el archivo `.zip` en el entorno Server.

5. Prueba los Servicios con Postman:
   - GET: http://server-env.eba-rki6xxyb.us-east-2.elasticbeanstalk.com/Items/1234567890
   - PUT: http://server-env.eba-rki6xxyb.us-east-2.elasticbeanstalk.com/Items/1234567890
     - Body en formato JSON:
       {
         "descripcion": "Descripción actualizada del artículo",
         "modelo": "Actualizado"
       }
