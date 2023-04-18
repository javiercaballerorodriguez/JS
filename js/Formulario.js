function createItem(fila)
{
    location.href="./Formulario.html";
    window.alert(fila.id)
    const variable = fila.id;
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

        /*case "filasProductoLogin":
    var persona = new Persona("Ricardo", "2001", "hoy", "https://es.wikipedia.org/wiki/HTML", "Imagenes/TimBerner.jpg");
    personas.push(persona);
    var personasJSON = JSON.stringify(personas);
    localStorage.setItem("Personas", personasJSON);
        case "filasEntidadLogin":

        default*/
    }
}