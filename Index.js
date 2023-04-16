class Persona {
    constructor(nombre, fechaNacimiento, fechaDefuncion, wiki, img) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.fechaDefuncion = fechaDefuncion;
        this.wiki = wiki;
        this.img = img;
    }
}


class Producto {
    constructor(nombre, fechaCreacion, fechaFinalizacion, wiki, img, personas, entidades) {
        this.nombre = nombre;
        this.fechaCreacion = fechaCreacion;
        this.fechaFinalizacion = fechaFinalizacion;
        this.wiki = wiki;
        this.img = img;
        this.personas = [personas];
        this.entidades = [entidades];
    }
}

function guardarPersona(event) {
    const personas = JSON.parse(localStorage.getItem("Personas"));
    const nombre = event.target.innerHTML;
    for (var i = 0; i < personas.length; i++) {
        if (personas[i].nombre === nombre) {
            var personaJson = JSON.stringify(personas[i]);
            localStorage.setItem("Persona", personaJson);
            return;
        }
    }
}



function mostrarPersonas() {
    const personas = JSON.parse(localStorage.getItem("Personas"));
    const fila = document.getElementById("filasPersona");
    for (var i = 0; i < personas.length; i++) {
        const td = document.createElement("td");
        const a = document.createElement("a");
        const img = document.createElement("img");
        img.src = personas[i].img;
        a.onclick = guardarPersona;
        a.href = "Persona.html";
        a.innerHTML = personas[i].nombre;
        td.appendChild(img);
        td.appendChild(a);
        fila.appendChild(td);
    }
}



function guardarProducto(event) {
    const productos = JSON.parse(localStorage.getItem("Productos"));
    const nombre = event.target.innerHTML;
    for (var i = 0; i < productos.length; i++) {
        if (productos[i].nombre === nombre) {
            var productoJSON = JSON.stringify(productos[i]);
            localStorage.setItem("Producto", productoJSON);
            return;
        }
    }
}



function mostrarProductos() {
    const productos = JSON.parse(localStorage.getItem("Productos"));
    const fila = document.getElementById("filasProducto");
    for (var i = 0; i < productos.length; i++) {
        const td = document.createElement("td");
        const a = document.createElement("a");
        const img = document.createElement("img");
        img.src = productos[i].img;
        a.onclick = guardarProducto;
        a.href = "Producto.html";
        a.innerHTML = productos[i].nombre;
        td.appendChild(img);
        td.appendChild(a);
        fila.appendChild(td);
    }
}


function cargarDatos() {
    var usersArray = [{ user: "x", password: "x" }, { user: "y", password: "y" }, { user: "z", password: "z" }];
    var users = JSON.stringify(usersArray);
    localStorage.setItem("Usuarios", users);
    var personas = [];
    var persona = new Persona("Ricardo", "2001", "hoy", "https://es.wikipedia.org/wiki/HTML", "TimBerner.jpg");
    personas.push(persona);
    var personasJSON = JSON.stringify(personas);
    localStorage.setItem("Personas", personasJSON);
    mostrarPersonas();
    var productos = [];
    var producto = new Producto("Champú", "2003", "ayer", "https://es.wikipedia.org/wiki/HTML", "HTML.png", "si", "no");
    productos.push(producto);
    var productosJSON = JSON.stringify(productos);
    localStorage.setItem("Productos", productosJSON);
    mostrarProductos();
}






function logearse() {
    const fieldUser = document.getElementById("campoUsuario").value;
    const fieldPassword = document.getElementById("campoContrasenia").value;
    const usuariosBD = JSON.parse(localStorage.getItem("Usuarios"));
    for (var i = 0; i < usuariosBD.length; i++) {
        if (usuariosBD[i].user === fieldUser && usuariosBD[i].password === fieldPassword) {
            window.alert("Usuario válido, bienvenido!");
            window.location.href = 'Login.html';
            return;
        }
    }
    window.alert("Usuario no válido, intentelo de nuevo");
}

