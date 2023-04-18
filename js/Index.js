class Persona {
    constructor(nombre, fechaNacimiento, fechaDefuncion, wiki, img) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.fechaDefuncion = fechaDefuncion;
        this.wiki = wiki;
        this.img = img;
    }
}


class Entidad {
    constructor(nombre, fechaInvencion, fechaTerminacion, wiki, img, personas)
    {
        this.nombre = nombre;
        this.fechaInvencion = fechaInvencion;
        this.fechaTerminacion = fechaTerminacion;
        this.wiki = wiki;
        this.img = img;
        this.personas = personas;
    }
}


class Producto {
    constructor(nombre, fechaCreacion, fechaFinalizacion, wiki, img, personas, entidades) {
        this.nombre = nombre;
        this.fechaCreacion = fechaCreacion;
        this.fechaFinalizacion = fechaFinalizacion;
        this.wiki = wiki;
        this.img = img;
        this.personas = personas;
        this.entidades = entidades;
    }
}


//FUNCIONES PERSONA
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

//FUNCIONES ENTIDAD
function guardarEntidad(event)
{
    const entidades = JSON.parse(localStorage.getItem("Entidades"));
    const nombre = event.target.innerHTML;
    for(var i=0; i<entidades.length; i++)
    {
        if(entidades[i].nombre===nombre)
        {
            var entidadesJSON = JSON.stringify(entidades[i]);
            localStorage.setItem("Entidad", entidadesJSON);
            return ;
        }
    }
}


function mostrarEntidades()
{
    const entidades = JSON.parse(localStorage.getItem("Entidades"));
    const fila = document.getElementById("filasEntidad");
    for(var i=0; i<entidades.length; i++)
    {
        const td = document.createElement("td");
        const a = document.createElement("a");
        const img = document.createElement("img");
        img.src = entidades[i].img;
        a.onclick = guardarEntidad;
        a.href = "Entidad.html";
        a.innerHTML= entidades[i].nombre;
        td.appendChild(img);
        td.appendChild(a);
        fila.appendChild(td);
    }
}


//FUNCIONES PRODUCTO
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

function inicializarItems()
{
    var personas = [];
    var persona = new Persona("Ricardo", "2001", "hoy", "https://es.wikipedia.org/wiki/HTML", "Imagenes/TimBerner.jpg");
    personas.push(persona);
    var personasJSON = JSON.stringify(personas);
    localStorage.setItem("Personas", personasJSON);
    var entidades=[];
    var personasEntidades=[];
    personasEntidades.push(persona.nombre);
    var entidad = new Entidad("HTML", "2005", "mañana", "https://es.wikipedia.org/wiki/HTML", "Imagenes/Interrogacion.png", personasEntidades);
    entidades.push(entidad);
    var entidadJSON = JSON.stringify(entidades);
    localStorage.setItem("Entidades",entidadJSON);
    var productos = [];
    var personasProductos = [];
    personasProductos.push(persona.nombre);
    var entidadesProductos =[];
    entidadesProductos.push(entidad.nombre);
    var producto = new Producto("Champú", "2003", "ayer", "https://es.wikipedia.org/wiki/HTML", "Imagenes/HTML.png", personasProductos, entidadesProductos);
    productos.push(producto);
    var productosJSON = JSON.stringify(productos);
    localStorage.setItem("Productos", productosJSON);
}


//CARGAR TODOS LOS DATOS EN LA BD
function cargarDatos() {
    var CargaDeDatos= JSON.parse(localStorage.getItem("CargaDeDatos"));
    console.log(CargaDeDatos);
    if(CargaDeDatos!=1)
    {
    var usersArray = [{ user: "x", password: "x" }, { user: "y", password: "y" }, { user: "z", password: "z" }];
    var users = JSON.stringify(usersArray);
    localStorage.setItem("Usuarios", users);
    inicializarItems();
    }
    mostrarPersonas();
    mostrarEntidades();
    mostrarProductos();
}



//LOGEARSE EN LA PAGINA
function logearse() {
    var CargarDatos=0;
    localStorage.setItem("CargaDeDatos", CargarDatos);
    const fieldUser = document.getElementById("campoUsuario").value;
    const fieldPassword = document.getElementById("campoContrasenia").value;
    const usuariosBD = JSON.parse(localStorage.getItem("Usuarios"));
    for (var i = 0; i < usuariosBD.length; i++) {
        if (usuariosBD[i].user === fieldUser && usuariosBD[i].password === fieldPassword) {
            CargarDatos= 1;
            localStorage.setItem("CargaDeDatos", CargarDatos);
            window.alert("Usuario válido, bienvenido!");
            window.location.href = 'Login.html';
            return;
        }
    }
    window.alert("Usuario no válido, intentelo de nuevo");
}


