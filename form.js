const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/ 
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += 'nombre demasiado corto, por favor ingrese un nombre válido. <br>'
        entrar = true
    }
    console.log(regexEmail.test(email.value))
    if(regexEmail.test(email.value)){
        warnings += 'Email no válido. <br>'
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += 'La contraseña no es válida <br>'
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }
    else{
        parrafo.innerHTML = "enviado"
    }
})