function cargarPersona() {
    const persona = JSON.parse(localStorage.getItem("Persona"));
    const div = document.getElementById("persona");
    const h1 = document.createElement("h1");
    const entidades = JSON.parse(localStorage.getItem("Entidades"));
    const productos = JSON.parse(localStorage.getItem("Productos"));
    h1.innerHTML = "nombre: " + persona.nombre;
    const h2 = document.createElement("h2");
    h2.innerHTML = persona.fechaNacimiento;
    const h3 = document.createElement("h3");
    h3.innerHTML = persona.fechaDefuncion;
    const a = document.createElement("a");
    a.href = persona.wiki;
    a.innerHTML = persona.wiki;
    const img = document.createElement("img");
    img.src = persona.img;
    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(a);
    div.appendChild(img);
    for(var i=0; i<entidades.length; i++)
    {
        if(entidades[i].personas!=null){
            if(entidades[i].personas.includes(persona.nombre))
            {
                const ul = document.createElement("ul");
                ul.innerText = "Entidades de las que forma parte: ";
                const li = document.createElement("li");
                li.innerText = entidades[i].nombre;
                ul.appendChild(li);
                div.appendChild(ul);
            }
        }
    }
    for(var i=0; i<productos.length; i++)
    {
        if(productos[i].personas!=null){
            if(productos[i].personas.includes(persona.nombre))
            {
                const ul = document.createElement("ul");
                ul.innerText = "Productos que ha creado: ";
                const li = document.createElement("li");
                li.innerText = productos[i].nombre;
                ul.appendChild(li);
                div.appendChild(ul);
            }
        }
    }
}
