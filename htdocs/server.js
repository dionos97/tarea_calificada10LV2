const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('C:/Users/munoz/OneDrive/Escritorio/Nivel 2 FUNVAL/mi_proyecto10.1/htdocs/swagger.yaml');
const mysql = require('mysql');
const path = require('path'); // Agregar esta línea para trabajar con rutas de archivos
const app = express();
const PORT = 3000;

// Configuración de la conexión a la base de datos MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'funval_platform'
});

// Conexión a la base de datos
connection.connect((err) => {
    if (err) throw err;
    console.log('Conexión exitosa a la base de datos MySQL');
});

// Middleware para servir la documentación de Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Middleware para servir archivos estáticos desde la carpeta "frontend"
app.use(express.static(path.join(__dirname, 'htdocs')));
// Ruta de inicio
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'htdocs','frontend', 'index.html'));
  });
  
// Rutas para operaciones CRUD de usuarios
app.get('/usuarios', getAllUsuarios); // Obtener todos los usuarios
app.get('/usuarios/:id', getUsuarioById); // Obtener un usuario por ID
app.post('/usuarios', createUsuario); // Crear un nuevo usuario
app.put('/usuarios/:id', updateUsuario); // Actualizar un usuario por ID
app.delete('/usuarios/:id', deleteUsuario); // Eliminar un usuario por ID

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  });


// Obtener todos los usuarios
function getAllUsuarios(req, res) {
    
    
    res.json({ message: 'Lista de usuarios obtenida correctamente' });
}

// Obtener un usuario por ID
function getUsuarioById(req, res) {
    const id = req.params.id;
   
    res.json({ message: `Usuario con ID ${id} obtenido correctamente` });
}

// Crear un nuevo usuario
function createUsuario(req, res) {
   
    res.json({ message: 'Usuario creado correctamente' });
}

// Actualizar un usuario por ID
function updateUsuario(req, res) {
    const id = req.params.id;
   
    res.json({ message: `Usuario con ID ${id} actualizado correctamente` });
}

// Eliminar un usuario por ID
function deleteUsuario(req, res) {
    const id = req.params.id;
    
    res.json({ message: `Usuario con ID ${id} eliminado correctamente` });
}

// Rutas para operaciones CRUD de roles
app.get('/roles', getAllRoles); // Obtener todos los roles
app.get('/roles/:id', getRolById); // Obtener un rol por ID
app.post('/roles', createRol); // Crear un nuevo rol
app.put('/roles/:id', updateRol); // Actualizar un rol por ID
app.delete('/roles/:id', deleteRol); // Eliminar un rol por ID

// Controladores para manejar operaciones CRUD de roles

// Obtener todos los roles
function getAllRoles(req, res) {
   
    res.json({ message: 'Lista de roles obtenida correctamente' });
}

// Obtener un rol por ID
function getRolById(req, res) {
    const id = req.params.id;
    
    res.json({ message: `Rol con ID ${id} obtenido correctamente` });
}

// Crear un nuevo rol
function createRol(req, res) {
   
    res.json({ message: 'Rol creado correctamente' });
}

// Actualizar un rol por ID
function updateRol(req, res) {
    const id = req.params.id;
    
    res.json({ message: `Rol con ID ${id} actualizado correctamente` });
}

// Eliminar un rol por ID
function deleteRol(req, res) {
    const id = req.params.id;
    
    res.json({ message: `Rol con ID ${id} eliminado correctamente` });
}
