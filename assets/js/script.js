/*
Case Sensitive = reconhece letras maiusculas e minusculas 

por Tag: getElementByTagName()
Por Id: getElementById()
por Nome: getElementsByName()
Por Classe: getElementsByClassName()
Por Seletor: querySelec tor()
*/ 
 
let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOK = false
let emailOK = false
let assuntoOK = false
let mapa = document.querySelector("#mapa")

nome.style.width = "98%"  
email.style.width = "98%"

function validaNome(){
     let textNome = document.querySelector("#txtNome")
    
     if (nome.value.length < 3) {
      textNome.innerHTML = "Nome Inválido" 
      textNome.style.color ="red"
    } else {
        textNome.innerHTML ="Nome Válido"
        textNome.style.color = "blue"
         nomeOK = true 
    }
}

function validaEmail(){
    let textEmail = document.querySelector("#txtEmail")
   
    if (email.value.indexOf("@") == -1||email.value.indexOf(".") == -1) {
      textEmail.innerHTML = "E-mail Inválido" 
      textEmail.style.color ="red"
    } else {
        textEmail.innerHTML ="E-mail Válido"
        textEmail.style.color = "blue"
        emailOK = true
    }
}

function validaAssunto(){
  let textAssunto = document.querySelector("#txtAssunto")
  
  if (assunto.value.length >= 100) {
    textAssunto.innerHTML = 
     "Texto é muito grande, digite no máximo 100 caracteres"
    textAssunto.style.color = "red"
    textAssunto.style.display = "block"
  } else {
    textAssunto.style.display = "none"
    assuntoOK = true
  }

}
  
function enviar() {
  if (nomeOK == true && emailOK == true && assuntoOK == true){
     alert ("Formulário enviado com sucesso")
  } else {
     alert ("Preencha o formulário corretamente antes de envair...")
  }
}
function mapaZoom() {
  mapa.style.whidth = "800px"
  mapa.style.height = "600px"
}
function mapaNormal() {
  mapa.style.whidth = "400px"
  mapa.style.height = "250px"
}


  