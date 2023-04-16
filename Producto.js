function cargarProducto()
{
    const producto = JSON.parse(localStorage.getItem("Producto"));
    const div = document.getElementById("producto");
    const h1 = document.getElementById("h1");
    h1.innerHTML = producto.nombre;
    const h2 = document.getElementById("h2");
    h2.innerHTML = producto.fechaCreacion;
    const h3 = document.getElementById("h3");
    h3.innerHTML = producto.fechaFinalizacion;
    const a = document.getElementById("a");
    a.href=producto.wiki;
    const img = document.getElementById("img");
    img.src = producto.img;
    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(a);
    div.appendChild(img);
}


/*this.personas = personas;
this.entidades = entidades;
*/