function cargarPersona() {
    const persona = JSON.parse(localStorage.getItem("Persona"));
    const div = document.getElementById("persona");
    const aside = document.getElementById("asidePersona");
    const h1 = document.createElement("h1");
    const entidades = JSON.parse(localStorage.getItem("Entidades"));
    const productos = JSON.parse(localStorage.getItem("Productos"));
    h1.innerHTML = "nombre: " + persona.nombre;
    const h2 = document.createElement("h2");
    h2.innerHTML = persona.fechaNacimiento;
    const h3 = document.createElement("h3");
    h3.innerHTML = persona.fechaDefuncion;
    const iframe = document.createElement("iframe");
    iframe.src = persona.wiki;
    const img = document.createElement("img");
    img.src = persona.img;
    div.appendChild(img);
    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(h3);
    aside.appendChild(iframe);
    const ul = document.createElement("ul");
    ul.innerText = "Entidades de las que forma parte: ";
    for(var i=0; i<entidades.length; i++)
    {
        if(entidades[i].personas!=null){
            if(entidades[i].personas.includes(persona.nombre))
            {
                const li = document.createElement("li");
                li.innerText = entidades[i].nombre;
                ul.appendChild(li);
                div.appendChild(ul);
            }
        }
    }
    const ul2 = document.createElement("ul");
    ul2.innerText = "Productos que ha creado: ";
    for(var i=0; i<productos.length; i++)
    {
        if(productos[i].personas!=null){
            if(productos[i].personas.includes(persona.nombre))
            {
                const li2 = document.createElement("li");
                li2.innerText = productos[i].nombre;
                ul2.appendChild(li2);
                div.appendChild(ul2);
            }
        }
    }
}
