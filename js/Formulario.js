function createItem(fila)
{

    window.alert(fila.id)
    let variable = fila.id;
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
            var producto = new Producto(document.getElementById("nombre").value,
                                        document.getElementById("fechaNac").value,
                                        document.getElementById("fechaDef").value,
                                        document.getElementById("wiki").value,
                                        document.getElementById("img").value);
            var productos = JSON.parse(localStorage.getItem("Productos"));
            productos.push(producto);
            var productosJSON = JSON.stringify(productos);
            localStorage.setItem("Productos",productosJSON);
            break;
        case "filasEntidadLogin":
            var entidad = new Entidad(document.getElementById("nombre").value,
                                        document.getElementById("fechaNac").value,
                                        document.getElementById("fechaDef").value,
                                        document.getElementById("wiki").value,
                                        document.getElementById("img").value);
            var entidades = JSON.parse(localStorage.getItem("Entidades"));
            entidades.push(entidades);
            var entidadesJSON = JSON.stringify(entidades);
            localStorage.setItem("Entidades",entidadesJSON);
            break;
        default:
            return ;
    }
}