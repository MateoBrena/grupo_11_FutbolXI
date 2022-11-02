let nombre = document.querySelector("#nombre");
let precio = document.querySelector("#precio");
let descripcion = document.querySelector("#descripcion");
let imagen = document.querySelector("#imagen");
let create = document.querySelector("#create");
let errorNombre = document.querySelector("#errorNombre");
let errorPrecio = document.querySelector("#errorPrecio");
let errorDescripcion = document.querySelector("#errorDescripcion");
let errorImagen = document.querySelector("#errorImagen");

let form = document.querySelector(".formulario-registro")
let allowedExtensions =/(\.jpg|\.jpeg|\.png|\.gif)$/i;
 
create.addEventListener("click", function(event){
    event.preventDefault();
    let errores = {};
    if(nombre.value.length < 5 ){
    errores.nombre = "El minimo debe ser 5 caracteres";
    }

    if(!allowedExtensions.exec(imagen.value)){
        errores.image = "El formato de imagen no es válido"
    }

    if(descripcion.value.length < 20 ){
        errores.descripcion = "El minimo debe ser 4 caracteres";
    }
    if(precio.value.length < 1 ){
        errores.precio = "El campo debe estar completo";
    }

    if(Object.keys(errores).length >= 1){
        errorNombre.innerText = errores.nombre ? errores.nombre : null;
        errorNombre.style.backgroundColor+= "tomato"
        errorPrecio.innerText = errores.precio ? errores.precio : null;
        errorPrecio.style.backgroundColor+= "tomato"
        errorDescripcion.innerText = errores.descripcion ? errores.descripcion : null;
        errorDescripcion.style.backgroundColor+= "tomato"
        errorImagen.innerText = errores.image ? errores.image : null;
        errorImagen.style.backgroundColor+= "tomato"
    } else { form.submit() }
})
