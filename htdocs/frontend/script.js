document.addEventListener("DOMContentLoaded", function() {
    // URL base de la API
    const baseURL = "http://localhost:3000";
// Obtener referencia a los elementos del DOM
const usuariosLink = document.getElementById("usuarios-link");
const rolesLink = document.getElementById("roles-link");

// Manejar clic en "Lista de Usuarios"
usuariosLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    window.location.href = `${baseURL}/usuarios`; // Redirigir a la ruta de usuarios en el servidor
});

// Manejar clic en "Lista de Roles"
rolesLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    window.location.href = `${baseURL}/roles`; // Redirigir a la ruta de roles en el servidor
});

    // Función para cargar la lista de usuarios desde la API
    function cargarUsuarios() {
        fetch(`${baseURL}/usuarios`)
            .then(response => response.json())
            .then(data => {
                const usuariosLista = document.getElementById("usuarios-lista");
                usuariosLista.innerHTML = ""; // Limpiar la lista antes de cargar los nuevos usuarios

                data.forEach(usuario => {
                    const listItem = document.createElement("li");
                    listItem.textContent = `${usuario.nombre} (${usuario.rol})`;
                    usuariosLista.appendChild(listItem);
                });
            })
            .catch(error => {
                console.error("Error al cargar usuarios:", error);
            });
    }

    // Función para cargar la lista de roles desde la API
    function cargarRoles() {
        fetch(`${baseURL}/roles`)
            .then(response => response.json())
            .then(data => {
                const rolesLista = document.getElementById("roles-lista");
                rolesLista.innerHTML = ""; // Limpiar la lista antes de cargar los nuevos roles

                data.forEach(rol => {
                    const listItem = document.createElement("li");
                    listItem.textContent = rol.nombre;
                    rolesLista.appendChild(listItem);
                });
            })
            .catch(error => {
                console.error("Error al cargar roles:", error);
            });
    }
   
    
    // Llamar a las funciones para cargar los usuarios y roles cuando se cargue la página
    cargarUsuarios();
    cargarRoles();
});
