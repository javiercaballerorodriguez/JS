function cargarEntidad()
{
    var userLogin = localStorage.getItem("usuarioLogeado");
    const entidad = JSON.parse(localStorage.getItem("Entidad"));
    const div = document.getElementById("entidad");
    const aside=document.getElementById("asideEntidad");
    const h1 = document.createElement("h1");
    h1.innerHTML = entidad.nombre;
    const h2 = document.createElement("h2");
    h2.innerHTML = entidad.fechaInvencion;
    const h3 = document.createElement("h3");
    h3.innerHTML = entidad.fechaTerminacion;
    const iframe = document.createElement("iframe");
    iframe.src = entidad.wiki;
    const img = document.createElement("img");
    img.src = entidad.img;
    div.appendChild(img);
    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(h3);
    aside.appendChild(iframe);
    if(entidad.personas!=null){
      const ul = document.createElement("ul");
      ul.innerText = "Personas relacionadas: ";
      entidad.personas.forEach(persona => {
        const li = document.createElement("li");
        li.innerText = persona;
        ul.appendChild(li);
        div.appendChild(ul);
      });
   }
   if(userLogin==="true"){
   var idModificacion = "Entidad";
   localStorage.setItem("idModificacion", idModificacion);     
   const input = document.createElement("input");
   input.setAttribute("type", "button");
   input.setAttribute("value", "modify");
   input.addEventListener("click",() => { irAModificar(); });
   div.appendChild(input);
   }  
   
function irAModificar()
{
    location.href="./Modificacion.html";
}
}