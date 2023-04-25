function cargarProducto()
{
    const producto = JSON.parse(localStorage.getItem("Producto"));
    const div = document.getElementById("producto");
    const h1 = document.createElement("h1");
    h1.innerHTML = producto.nombre;
    const h2 = document.createElement("h2");
    h2.innerHTML = producto.fechaCreacion;
    const h3 = document.createElement("h3");
    h3.innerHTML = producto.fechaFinalizacion;
    const a = document.createElement("a");
    a.href=producto.wiki;
    a.innerHTML = producto.wiki;
    const img = document.createElement("img");
    img.src = producto.img;
    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(a);
    div.appendChild(img);
    if(producto.personas!=null){
      const ul = document.createElement("ul");
      ul.innerText = "Personas relacionadas: ";
      producto.personas.forEach(persona => {
        const li = document.createElement("li");
        li.innerText = persona;
        ul.appendChild(li);
        div.appendChild(ul);
      });
    }
    if(producto.entidades!=null){
      const ulEntidad = document.createElement("ul");
      ulEntidad.innerText = "Entidades relacionadas: ";
      producto.entidades.forEach(entidad => {
        const liEntidad = document.createElement("li");
        liEntidad.innerText = entidad;
        ulEntidad.appendChild(liEntidad);
        div.appendChild(ulEntidad);
      });
    }
}