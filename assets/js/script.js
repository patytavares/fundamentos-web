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

nome.style.width = "100%"  
email.style.width = "100%"

function validaNome(){
     let textNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
      textNome.innerHTML = "Nome Inválido" 
      textNome.style.color ="red"
    } else {
        textNome.innerHTML ="Nome Válido"
        textNome.style.color = "blue"
    }
}

function validaEmail(){
    let textEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1||email.value.indexOf(".") == -1) {
      textEmail.innerHTML = "E-mail Inválido" 
      textEmail.style.color ="red"
    } else {
        textEmail.innerHTML ="E-mail Válido"
        textEmail.style.color = "purple"
    }
}



