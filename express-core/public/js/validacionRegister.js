let nombre = document.querySelector("#nombre");
let apellido = document.querySelector("#apellido");
let email = document.querySelector("#email");
let contraseña = document.querySelector("#contraseña");
let ConfiPass = document.querySelector("#confipass");
let imagen = document.querySelector("#imagen");
let register = document.querySelector("#register")

let errornombre = document.querySelector("#errornombre");
let errorapellido = document.querySelector("#errorapellido");
let errorEmail = document.querySelector("#errorEmail");
let errorcontraseña = document.querySelector("#errorContraseña");
let errorConfiPass = document.querySelector("#errorConfiPass");
let errorimagen = document.querySelector("#errorImagen");


let validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
let form = document.querySelector(".formulario-registro")
let allowedExtensions =/(\.jpg|\.jpeg|\.png|\.gif)$/i;

register.addEventListener("click", function(event){
    
    event.preventDefault();
    let errores = {};
    if(nombre.value.length <= 2 ){
        errores.nombre = "Este campo debe estar completo";
    }
    if (apellido.value.length <= 2){
    errores.apellido = "Este campo debe estar completo"
    }
    
    if (email.value.length >= 1 && !email.value.match(validRegex)){
        errores.email = "Email no valido"
    }

    if(contraseña.value.length < 8 && !contraseña.value.match(validRegex)){
     errores.contraseña = "Este campo debe estar completo o debe tener letras mayúsculas, minúsculas, un número y un carácter especial.";
    }
    
    if(ConfiPass.value.length < 8 && ConfiPass.value.length != contraseña.value ){
        errores.ConfiPass = "El minimo debe ser de 8 caracteres";
    }

    if(imagen.value && !allowedExtensions.exec(imagen.value)){
        errores.imagen = "El formato de imagen no es válido"
    }

    
    if(Object.keys(errores).length >= 1){
        
        errornombre.innerText = errores.nombre ? errores.nombre : null;
        errornombre.style.backgroundColor+= "tomato"

        errorapellido.innerText = errores.apellido ? errores.apellido : null;
        errorapellido.style.backgroundColor+= "tomato"
        
        errorEmail.innerText = errores.email ? errores.email : null;
        errorEmail.style.backgroundColor+= "tomato"
        
        errorcontraseña.innerText = errores.contraseña ? errores.contraseña : null;
        errorcontraseña.style.backgroundColor+= "tomato";
        
        errorConfiPass.innerText = errores.ConfiPass ? errores.ConfiPass : null;
        errorConfiPass.style.backgroundColor+= "tomato";
        
        errorimagen.innerText = errores.imagen ? errores.imagen : null;
        errorimagen.style.backgroundColor+= "tomato";
    } else { form.submit() }
})