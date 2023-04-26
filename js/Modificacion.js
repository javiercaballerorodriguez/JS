function modificar()
{
    var item = localStorage.getItem("idModificacion");
    console.log("hola");
    switch(item)
    {
        case "Persona":
            const persona = JSON.parse(localStorage.getItem("Persona"));
            const personasArray = JSON.parse(localStorage.getItem("Personas"));
            for(var i=0; i<personasArray.length; i++)
            {
                if(personasArray[i].nombre===persona.nombre)
                {
                    if(document.getElementById("nombre").value.length !=0){
                        personasArray[i].nombre= document.getElementById("nombre").value;
                    }
                    if(document.getElementById("fechaNac").value.length !=0){
                        personasArray[i].fechaNacimiento= document.getElementById("fechaNac").value;
                    }
                    if(document.getElementById("fechaDef").value.length !=0){
                        personasArray[i].fechaDefuncion= document.getElementById("fechaDef").value;
                    }
                    if(document.getElementById("wiki").value.length !=0){
                        personasArray[i].wiki= document.getElementById("wiki").value;
                    }
                    if(document.getElementById("img").value.length !=0){
                        personasArray[i].img= document.getElementById("img").value;
                    } 
                    var personasJSON = JSON.stringify(personasArray);
                    localStorage.setItem("Personas",personasJSON);
                }
            }
            if(document.getElementById("nombre").value.length!=0)
            {
                const productos = JSON.parse(localStorage.getItem("Productos"));
                const entidades = JSON.parse(localStorage.getItem("Entidades"));
                for(var i=0; i<productos.length; i++)
                {
                    for(var j=0; j<productos[i].personas.length; j++)
                    {
                        if(productos[i].personas[j]===persona.nombre)
                        {
                            productos[i].personas[j]=document.getElementById("nombre").value;
                        }
                    }
                }
                for(var i=0; i<entidades.length; i++)
                {
                    for(var j=0; j<entidades[i].personas.length; j++)
                    {
                        if(entidades[i].personas[j]===persona.nombre)
                        {
                            entidades[i].personas[j]=document.getElementById("nombre").value;
                        }
                    }
                }
                var productosJSON = JSON.stringify(productos);
                localStorage.setItem("Productos",productosJSON);
                var entidadesJSON = JSON.stringify(entidades);
                localStorage.setItem("Entidades",entidadesJSON);
            }
            break;





            
        case "Producto":
            const producto = localStorage.getItem("Producto");
            if(document.getElementById("nombre").value.length !=0){
                producto.nombre= document.getElementById("nombre").value
            }
            if(document.getElementById("fechaNac").value.length !=0){
                producto.fechaNacimiento= document.getElementById("fechaNac").value
            }
            if(document.getElementById("fechaDef").value.length !=0){
                producto.fechaDefuncion= document.getElementById("fechaDef").value
            }
            if(document.getElementById("wiki").value.length !=0){
                producto.wiki= document.getElementById("wiki").value
            }
            if(document.getElementById("img").value.length !=0){
                producto.img= document.getElementById("img").value
            } 
            break;







        case "Entidad":
            const entidad = localStorage.getItem("Entidad");
            const entidadesArray = localStorage.getItem("Entidades");
            for(var i=0; i<entidadesArray.length; i++)
            {
                if(entidadesArray[i].nombre===entidad.nombre)
                {
                    if(document.getElementById("nombre").value.length !=0){
                        entidadesArray[i].nombre= document.getElementById("nombre").value
                    }
                    if(document.getElementById("fechaNac").value.length !=0){
                        entidadesArray[i].fechaNacimiento= document.getElementById("fechaNac").value
                    }
                    if(document.getElementById("fechaDef").value.length !=0){
                        entidadesArray[i].fechaDefuncion= document.getElementById("fechaDef").value
                    }
                    if(document.getElementById("wiki").value.length !=0){
                        entidadesArray[i].wiki= document.getElementById("wiki").value
                    }
                    if(document.getElementById("img").value.length !=0){
                        entidadesArray[i].img= document.getElementById("img").value
                    }
                    var entidadesJSON = JSON.stringify(entidadesArray);
                    localStorage.setItem("Entidades",entidadesJSON);
                } 
            }
            if(document.getElementById("nombre").value.length!=0)
            {
                const productos = JSON.parse(localStorage.getItem("Productos"));
                for(var i=0; i<productos.length; i++)
                {
                    for(var j=0; j<productos[i].personas.length; j++)
                    {
                        if(productos[i].entidades[j]===entidad.nombre)
                        {
                            productos[i].personas[j]=document.getElementById("nombre").value;
                        }
                    }
                }
                var productosJSON = JSON.stringify(productos);
                localStorage.setItem("Productos",productosJSON);
            }
            break;
        default: 
            return ;
    }
}