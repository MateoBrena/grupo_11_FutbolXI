
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let login = document.querySelector("#login");
let errorEmail = document.querySelector("#errorEmail");
let errorPassword = document.querySelector("#errorPassword");
let validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
let form = document.querySelector(".formulario-registro")

login.addEventListener("click", function(event){
    
    event.preventDefault();
    let errores = {};
    if(email.value.length < 1 ){
    errores.email = "Este campo debe estar completo";
    }
    if (email.value.length >= 1 && !email.value.match(validRegex) ){
    errores.email = "Email no valido"
    }
       

    if(password.value.length < 1 ){
   errores.password = "Este campo debe estar completo";
    }
    
    if(password.value.length < 4 && password.value.length > 0 ){
        errores.password = "El minimo debe ser 4 caracteres";
    }

    if(Object.keys(errores).length >= 1){
        
        errorEmail.innerText = errores.email ? errores.email : null;
        errorEmail.style.backgroundColor+= "tomato"
        errorPassword.innerText = errores.password ? errores.password : null;
        errorPassword.style.backgroundColor+= "tomato"
    } else { form.submit() }
})