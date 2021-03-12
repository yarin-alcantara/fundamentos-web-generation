let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let mensagem = document.querySelector("#mensagem")
let nomeOk = false
let emailOk = false
let mensagemOk = false
let mapa = document.querySelector("#mapa")

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3){
        txtNome.innerHTML = "Nome Invalido"
        txtNome.style.color = "red"
        txtNome.style.fontSize = "20px"
        txtNome.style.fontWeight = "bold"
    } else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        txtNome.style.fontSize = "20px"
        txtNome.style.fontWeight = "bold"
        nomeOk = true
    }
}
function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "Email Invalido"
        txtEmail.style.color = "red"
        txtEmail.style.fontSize = "20px"
        txtEmail.style.fontWeight = "bold"
        
    } else {
        txtEmail.innerHTML = "Email Válido"
        txtEmail.style.color = "green"
        txtEmail.style.fontSize = "20px"
        txtEmail.style.fontWeight = "bold"
        emailOk = true
    }
}
function validaMensagem(){
    let txtMensagem = document.querySelector("#txtMensagem")
    if(mensagem.value.length >= 100){
        txtMensagem.innerHTML = "Texto muito grande. Digite no maximo 100 caracteres!"
        txtMensagem.style.color = "red"
        txtMensagem.style.fontWeight = "bold"
        txtMensagem.style.fontSize = "20px"
        txtMensagem.style.display = "block"
    }else {
        txtMensagem.style.display = "none"
        mensagemOk = true
    }
}
function enviar() {
    if (nomeOk == true && emailOk == true && mensagemOk == true){
        alert ("Formulário Enviado!")
    } else {
        alert ("Preencha o formulário corretamente!")
    }

}
function mapaZoom() {
    mapa.style.width = "600px"
    mapa.style.height = "450px"
}
function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}