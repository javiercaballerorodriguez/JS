function cargarEntidad()
{
    const entidad = JSON.parse(localStorage.getItem("Entidad"));
    const div = document.getElementById("entidad");
    const h1 = document.createElement("h1");
    h1.innerHTML = entidad.nombre;
    const h2 = document.createElement("h2");
    h2.innerHTML = entidad.fechaInvencion;
    const h3 = document.createElement("h3");
    h3.innerHTML = entidad.fechaTerminacion;
    const a = document.createElement("a");
    a.href = entidad.wiki;
    const img = document.createElement("img");
    img.src = entidad.img;
    const ul = document.createElement("ul");
    ul.innerText = "Personas relacionadas: ";
    entidad.personas.forEach(persona => {
      const li = document.createElement("li");
      li.innerText = persona;
      ul.appendChild(li);
    });
    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(a);
    div.appendChild(img);
    div.appendChild(ul);
}