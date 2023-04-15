class Persona
{
    constructor(nombre, fechaNacimiento, fechaDefuncion, wiki, img)
    {
       this.nombre=nombre;
       this.fechaNacimiento=fechaNacimiento;
       this.fechaDefuncion=fechaDefuncion;
       this.wiki=wiki;
       this.img=img;
    }
}


function guardarPersona(event)
{
    var name = event.target.textContent;
    const personas = JSON.parse(localStorage.getItem("Personas"));
    for(var i=0; i<personas.length; i++);
    {
        if(personas[i].nombre===name)
        {
            var personaJSON= JSON.stringify(personas[i]);
            localStorage.setItem("persona", personaJSON);
        }
    }
}


function mostrarPersonas()
{
    const personas = JSON.parse(localStorage.getItem("Personas"));
    const fila = document.getElementById("filasPersona");
    //const img =
    for(var i=0; i<personas.length; i++){
        const td = document.createElement("td");
        const a = document.createElement("a");
        a.addEventListener("click", guardarPersona(event));
        a.href="Persona.html";
        a.innerHTML=personas[i].nombre;
     // td.appendChild(img);
        td.appendChild(a);
        fila.appendChild(td);
    }
}



function cargarDatos()
{
    var usersArray=[{user: "x", password:"x"}, {user: "y", password:"y"}, {user: "z", password:"z"}];
    var users= JSON.stringify(usersArray);
    localStorage.setItem("Usuarios", users);
    var personas= [];
    var persona= new Persona("Ricardo", "2001", "hoy", "https://es.wikipedia.org/wiki/HTML", "");
    personas.push(persona);
    var personasJSON= JSON.stringify(personas);
    localStorage.setItem("Personas", personasJSON);
    mostrarPersonas();
}


function logearse()
{
    const fieldUser= document.getElementById("campoUsuario").value;
    const fieldPassword= document.getElementById("campoContrasenia").value;
    const usuariosBD = JSON.parse(localStorage.getItem("Usuarios"));
    for(var i=0; i<usuariosBD.length; i++)
    {
        if(usuariosBD[i].user===fieldUser && usuariosBD[i].password===fieldPassword)
        {   
            window.alert("Usuario válido, bienvenido!");
            window.location.href='Login.html';
            return ;
        }
    }  
    window.alert("Usuario no válido, intentelo de nuevo");
}

