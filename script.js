const butsend = document.querySelector("#send")
const text = document.querySelector("#textarea")
butsend.addEventListener("click",() =>{
    if(!(text.value == "")){
        const mensagensbox = document.querySelector("#mensagens")
        const ncontmen = document.createElement("div")
        ncontmen.classList.add("contmen")
        ncontmen.innerHTML = `<div class="textmen"><p>${text.value}<\p>
            </div>
            <div class="bottons">
            <button class="btedit" onclick="edit(this)">Editar</button>
            <button class="btexit" onclick="exit(this)">Excluir</button>
        </div>`
        mensagensbox.appendChild(ncontmen)
        text.value = ""
    }else{
        alert("Digite um texto!!!!!")
    }   
})
function edit(check){
    if(!(text.value == "")) {
       check.parentNode.parentNode.firstChild.innerHTML = text.value
    }else{
        alert("Digite um texto!!!!!")
    }
}   
function exit(check){
    check.parentNode.parentNode.remove()
}
