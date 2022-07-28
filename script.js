function creatingbox(){
    const ncontmen = document.createElement("div")
    ncontmen.setAttribute("class","contmen")
    const ntextmen = document.createElement("div")
    ntextmen.setAttribute("class","textmen")
    const np = document.createElement("p")
    np.innerHTML = text.value
    const nbottons = document.createElement("div")
    nbottons.setAttribute("class","bottons")
    const nbtedit = document.createElement("button")
    nbtedit.setAttribute("class","btedit")
    nbtedit.innerHTML = "Editar"
    const nbtexit = document.createElement("button")
    nbtexit.setAttribute("class","btexit")
    nbtexit.innerHTML = "Excluir" 
    ntextmen.appendChild(np)
    nbottons.appendChild(nbtedit)
    nbottons.appendChild(nbtexit)
    ncontmen.appendChild(ntextmen)
    ncontmen.appendChild(nbottons)
    mensagensbox.appendChild(ncontmen)
}

var mensagensbox = document.querySelector("#mensagens")
var butsend = document.querySelector("#send")
var text = document.querySelector("#textarea")

butsend.addEventListener("click",() =>{
    creatingbox()
    text.value = ""
})