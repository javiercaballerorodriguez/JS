function cargarModificacion()
{
    var item = localStorage.getItem("idModificacion");
    var personasArray = JSON.parse(localStorage.getItem("Personas"));
    var entidadesArray = JSON.parse(localStorage.getItem("Entidades"));
    switch(item)
    {
        case "Producto":
            checkBox(personasArray,"Personas involucradas", "ListaPersonas");
            checkBox(entidadesArray,"Entidades involucradas", "ListaEntidades");
            break;
        case "Entidad":
            checkBox(personasArray,"Personas involucradas", "ListaPersonas");
    }

}

function checkValues(array)
{
    var arrayReturn=[];
    for(var i=0;i<array.length; i++)
    {
        if(array[i].checked)
        {
            arrayReturn.push(array[i].value);
        }
    }
    return arrayReturn;
}

function checkBox(array, texto, name)
{
    const label = document.createElement("label");
    label.appendChild(document.createTextNode(texto));
    var form = document.getElementById("form");
    var br = document.createElement("br");
    label.appendChild(br);
    form.insertBefore(label, document.getElementById("modificacion"));
    for(var i=0; i<array.length; i++)
    {
        const input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("name", name);
        input.setAttribute("id", array[i].nombre);
        input.setAttribute("value", array[i].nombre);
        form.insertBefore(input, document.getElementById("modificacion"));
        const labelNombre = document.createElement("label");
        labelNombre.setAttribute("for", array[i].nombre);
        labelNombre.appendChild(document.createTextNode(array[i].nombre));
        var br = document.createElement("br");
        var br2 = document.createElement("br");
        labelNombre.appendChild(br);
        if(i===array.length-1)
        {
            labelNombre.appendChild(br2);
        }
        form.insertBefore(labelNombre, document.getElementById("modificacion"));
    }
}

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
            const producto = JSON.parse(localStorage.getItem("Producto"));
            const productosArray = JSON.parse(localStorage.getItem("Productos"));
            for(var i=0; i<productosArray.length; i++)
            {
                if(productosArray[i].nombre===producto.nombre)
                {
                    if(document.getElementById("nombre").value.length !=0){
                        productosArray[i].nombre= document.getElementById("nombre").value
                    }
                    if(document.getElementById("fechaNac").value.length !=0){
                        productosArray[i].fechaNacimiento= document.getElementById("fechaNac").value
                    }
                    if(document.getElementById("fechaDef").value.length !=0){
                        productosArray[i].fechaDefuncion= document.getElementById("fechaDef").value
                    }
                    if(document.getElementById("wiki").value.length !=0){
                        productosArray[i].wiki= document.getElementById("wiki").value
                    }
                    if(document.getElementById("img").value.length !=0){
                        productosArray[i].img= document.getElementById("img").value
                    } 
                    var arrayPersonasCheckbox = document.getElementsByName("ListaPersonas");
                    for(var k=0; k<arrayPersonasCheckbox.length; k++)
                    {
                        if(arrayPersonasCheckbox[k].checked)
                        {
                            if(productosArray[i].personas.indexOf(arrayPersonasCheckbox[k].value)==-1)
                            {
                                productosArray[i].personas.push(arrayPersonasCheckbox[k].value);
                            }
                        }
                        else productosArray[i].personas.splice(productosArray[i].personas.indexOf(arrayPersonasCheckbox[k].value),1);
                    }
                    var arrayEntidadesCheckbox = document.getElementsByName("ListaEntidades");
                    for(var p=0; p<arrayEntidadesCheckbox.length; p++)
                    {
                        if(arrayEntidadesCheckbox[p].checked)
                        {
                            if(productosArray[i].entidades.indexOf(arrayEntidadesCheckbox[p].value)==-1)
                            {

                                productosArray[i].entidades.push(arrayEntidadesCheckbox[p].value);
                            }
                        }
                        else productosArray[i].entidades.splice(productosArray[i].entidades.indexOf(arrayEntidadesCheckbox[p].value),1);
                    }
                    window.alert(productosArray[i].entidades);
                    var productosJSON = JSON.stringify(productosArray);
                    localStorage.setItem("Productos",productosJSON);
                }
            }
            break;
        case "Entidad":
            const entidad = JSON.parse(localStorage.getItem("Entidad"));
            const entidadesArray = JSON.parse(localStorage.getItem("Entidades"));
            for(var i=0; i<entidadesArray.length; i++)
            {
                if(entidadesArray[i].nombre===entidad.nombre)
                {
                    if(document.getElementById("nombre").value.length !=0){
                        entidadesArray[i].nombre= document.getElementById("nombre").value
                    }
                    if(document.getElementById("fechaNac").value.length !=0){
                        entidadesArray[i].fechaInvencion= document.getElementById("fechaNac").value
                    }
                    if(document.getElementById("fechaDef").value.length !=0){
                        entidadesArray[i].fechaTerminacion= document.getElementById("fechaDef").value
                    }
                    if(document.getElementById("wiki").value.length !=0){
                        entidadesArray[i].wiki= document.getElementById("wiki").value
                    }
                    if(document.getElementById("img").value.length !=0){
                        entidadesArray[i].img= document.getElementById("img").value
                    }
                    var arrayPersonasCheckbox = document.getElementsByName("ListaPersonas");
                    for(var k=0; k<arrayPersonasCheckbox.length; k++)
                    {
                        if(arrayPersonasCheckbox[k].checked)
                        {
                            if(entidadesArray[i].personas.indexOf(arrayPersonasCheckbox[k].value)==-1)
                            {
                                entidadesArray[i].personas.push(arrayPersonasCheckbox[k].value);
                            }
                           
                        }
                        else entidadesArray[i].personas.splice(entidadesArray[i].personas.indexOf(arrayPersonasCheckbox[k].value),1);
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
                            productos[i].entidades[j]=document.getElementById("nombre").value;
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


