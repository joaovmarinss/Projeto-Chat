const butsend = document.querySelector("#send")
butsend.addEventListener("click",() =>{
    const mensagensbox = document.querySelector("#mensagens")
    const text = document.querySelector("#textarea")
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
})
function edit(check){
    const text = document.querySelector("#textarea")
    check.parentNode.parentNode.firstChild.innerHTML = text.value
}   
function exit(check){
    check.parentNode.parentNode.remove()
}
