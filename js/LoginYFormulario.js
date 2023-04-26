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

function crearCreateButton(fila)
{
    const tdButton = document.createElement("td");
    const input = document.createElement("input");
    input.setAttribute("type", "button");
    input.setAttribute("value", "create");
    input.addEventListener("click", () => { irAFormulario(fila); });
    tdButton.appendChild(input);
    fila.appendChild(tdButton);
}


function crearDeleteButton(td)
{
    const input = document.createElement("input");
    input.setAttribute("type", "button");
    input.setAttribute("value", "delete");
    input.addEventListener("click", () => { deleteItem(td); });
    td.appendChild(input);
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
    const fila = document.getElementById("filasPersonaLogin");
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
        crearDeleteButton(td);
    }
    crearCreateButton(fila);
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
    const fila = document.getElementById("filasEntidadLogin");
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
        crearDeleteButton(td);
    }
    crearCreateButton(fila);
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
    const fila = document.getElementById("filasProductoLogin");
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
        crearDeleteButton(td);
    }
    crearCreateButton(fila);
}



//CARGAR TODOS LOS DATOS EN LA BD
function cargarDatos() {
    var CargaDeDatos= JSON.parse(localStorage.getItem("CargaDeDatos"));
    console.log(CargaDeDatos);
    mostrarPersonas();
    mostrarEntidades();
    mostrarProductos();
}

//FUNCION PARA BORRAR ELEMENTOS
function deleteItem(td)
{
    console.log(td.children[1].textContent);
    var nombre = td.children[1].textContent;
    var idFila= td.parentElement.id;
    switch(idFila)
    {
        case "filasPersonaLogin":
            var personas = JSON.parse(localStorage.getItem("Personas"));
            for(var i=0; i<personas.length; i++)
            {
                if(personas[i].nombre===td.children[1].textContent)
                {
                    personas.splice(i, 1);
                    td.parentElement.removeChild(td);
                }
            }
            //LA SIGUIENTE PARTE SIRVE PARA QUITAR LA PERSONA DE LA LISTA DE ENTIDADES
            var entidades = JSON.parse(localStorage.getItem("Entidades"));
            for(var i=0; i<entidades.length; i++)
            {
                for(var j=0; j<entidades[i].personas.length; j++)
               { 
                if(entidades[i].personas[j]===nombre)
                {
                    entidades[i].personas.splice(j, 1);
                }
            }
            }
            //LA SIGUIENTE PARTE SIRVE PARA QUITAR LA PERSONA DE LA LISTA DE PRODUCTOS
            var productos = JSON.parse(localStorage.getItem("Productos"));
            for(var i=0; i<productos.length; i++)
            {
                for(var j=0; j<productos[i].personas.length; j++)
               { 
                if(productos[i].personas[j]===nombre)
                {
                    productos[i].personas.splice(j, 1);
                }
            }
            }
            var personasJSON = JSON.stringify(personas);
            localStorage.setItem("Personas",personasJSON);
            var entidadesJSON = JSON.stringify(entidades);
            localStorage.setItem("Entidades",entidadesJSON);
            var productosJSON = JSON.stringify(productos);
            localStorage.setItem("Productos",productosJSON);
            break;
        case "filasProductoLogin":                      //En el caso de que queramos eliminar un producto:
            var productos = JSON.parse(localStorage.getItem("Productos"));
            for(var i=0; i<productos.length; i++)
            {
                if(productos[i].nombre===td.children[1].textContent)
                {
                    productos.splice(i, 1);
                    td.parentElement.removeChild(td);
                }
            }
            var productosJSON = JSON.stringify(productos);
            localStorage.setItem("Productos",productosJSON);
            break;
        case "filasEntidadLogin":                       //En el caso de que queramos eliminar una entidad:
            var entidades = JSON.parse(localStorage.getItem("Entidades"));
            for(var i=0; i<entidades.length; i++)
            {
                if(entidades[i].nombre===td.children[1].textContent)
                {
                    entidades.splice(i, 1);
                    td.parentElement.removeChild(td);
                }
            }
            //LA SIGUIENTE PARTE SIRVE PARA QUITAR LA ENTIDAD DE LA LISTA DE PRODUCTOS
            var productos = JSON.parse(localStorage.getItem("Productos"));
            for(var i=0; i<productos.length; i++)
            {
                for(var j=0; j<productos[i].entidades.length; j++)
               { 
                if(productos[i].entidades[j]===nombre)
                {
                    productos[i].entidades.splice(j, 1);
                }
            }
            }
            var entidadesJSON = JSON.stringify(entidades);
            localStorage.setItem("Entidades",entidadesJSON);
            var productosJSON = JSON.stringify(productos);
            localStorage.setItem("Productos",productosJSON);
            break;
        default:
            return ;
    }
}


//FUNCION QUE LLEVA AL FORMULARIO Y TE CREA EL ELEMENTO
function irAFormulario(fila)
{
    location.href="./Formulario.html";
    localStorage.setItem("idFil", fila.id)
}

function createItem()
{
    if(document.getElementById("form").checkValidity()){
    var variable = localStorage.getItem("idFil");
    console.log(variable);
    switch(variable)
    {
        case "filasPersonaLogin":
            var persona = new Persona(document.getElementById("nombre").value,
                                        document.getElementById("fechaNac").value,
                                        document.getElementById("fechaDef").value,
                                        document.getElementById("wiki").value,
                                        document.getElementById("img").value);
            var personas = JSON.parse(localStorage.getItem("Personas"));
            personas.push(persona);
            var personasJSON = JSON.stringify(personas);
            localStorage.setItem("Personas",personasJSON);
            break;
        case "filasProductoLogin":

            var listaPersonas = checkValues(document.getElementsByName("ListaPersonas"));
            var listaEntidades = checkValues(document.getElementsByName("ListaEntidades"));
            var producto = new Producto(document.getElementById("nombre").value,
                                        document.getElementById("fechaNac").value,
                                        document.getElementById("fechaDef").value,
                                        document.getElementById("wiki").value,
                                        document.getElementById("img").value,
                                        listaPersonas, listaEntidades
                                        );
            var productos = JSON.parse(localStorage.getItem("Productos"));
            productos.push(producto);
            var productosJSON = JSON.stringify(productos);
            localStorage.setItem("Productos",productosJSON);
            break;
        case "filasEntidadLogin":
            var listaPersonas = checkValues(document.getElementsByName("ListaPersonas"));
            var entidad = new Entidad(document.getElementById("nombre").value,
                                        document.getElementById("fechaNac").value,
                                        document.getElementById("fechaDef").value,
                                        document.getElementById("wiki").value,
                                        document.getElementById("img").value,
                                        listaPersonas);
            var entidades = JSON.parse(localStorage.getItem("Entidades"));
            entidades.push(entidad);
            var entidadesJSON = JSON.stringify(entidades);
            localStorage.setItem("Entidades",entidadesJSON);
            break;
        default:
            return ;
    }
    }
}


function checkValues(array)
{
    var arrayReturn=[];
    for(var i=0;i<array.length; i++)
    {
        if(array[i].checked)
        {
            arrayReturn.push(array[i].value);
        }
    }
    return arrayReturn;
}


//FUNCION QUE SE USA PARA CONTROLAR CUANDO EL USUARIO ESTA LOGEADO O NO PARA ASI MOSTRAR LA FUNCION "MODIFICAR"
function deslogearse()
{
    var userLogin=localStorage.getItem("usuarioLogeado");
    userLogin=false;
    localStorage.setItem("usuarioLogeado", userLogin);
}



function cargarFormulario()
{
    var idFil = localStorage.getItem("idFil");
    var personasArray = JSON.parse(localStorage.getItem("Personas"));
    var entidadesArray = JSON.parse(localStorage.getItem("Entidades"));
    switch(idFil)
    {
        case "filasProductoLogin":
            checkBox(personasArray,"Personas involucradas", "ListaPersonas");
            checkBox(entidadesArray,"Entidades involucradas", "ListaEntidades");
            break;
        case "filasEntidadLogin":
            checkBox(personasArray,"Personas involucradas", "ListaPersonas");
    }
    


}

function checkBox(array, texto, name)
{
    const label = document.createElement("label");
    label.appendChild(document.createTextNode(texto));
    var form = document.getElementById("form");
    var br = document.createElement("br");
    label.appendChild(br);
    form.insertBefore(label, document.getElementById("crear"));
    for(var i=0; i<array.length; i++)
    {
        const input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("name", name);
        input.setAttribute("id", array[i].nombre);
        input.setAttribute("value", array[i].nombre);
        form.insertBefore(input, document.getElementById("crear"));
        const labelNombre = document.createElement("label");
        labelNombre.setAttribute("for", array[i].nombre);
        labelNombre.appendChild(document.createTextNode(array[i].nombre));
        var br = document.createElement("br");
        var br2 = document.createElement("br");
        labelNombre.appendChild(br);
        if(i===array.length-1)
        {
            labelNombre.appendChild(br2);
        }
        form.insertBefore(labelNombre, document.getElementById("crear"));
    }
}