function cargarPersona() {
    const persona = JSON.parse(localStorage.getItem("Persona"));
    const div = document.getElementById("persona");
    const h1 = document.createElement("h1");
    h1.innerHTML = persona.nombre;
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
}
