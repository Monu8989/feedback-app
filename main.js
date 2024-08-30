let nav =document.querySelector("nav")
let btn=document.querySelector("#btn01")
let container=document.querySelector("#cont01")
let h1=document.querySelector("h1")
let form=document.querySelector("form")
let select=document.querySelector("select")
let textarea=document.querySelector("textarea")
let btnsubmit=document.querySelector("#btnsubmit")
let ul=document.querySelector("ul")


let count=0
const Themechanged=()=>{

   if (count % 2===0) {
    nav.className="navbar bg-secondary"
    btn.className="btn btn-light btn-sm float-end rounded-5"
    container.className="container-fluid p-5 bg-dark"
    h1.className="display-5 text-center text-light"
      btnsubmit.className="btn btn-secondary w-100 rounded-0"

   } else {
    nav.className="navbar bg-body-tertiary"
    btn.className="btn btn-dark btn-sm float-end rounded-5"
    container.className="container-fluid p-5 bg-light"
    h1.className="display-5 text-center text-dark"
    btnsubmit.className="btn btn-success w-100 rounded-0"
   }
count++
}

btn.addEventListener("click",Themechanged)


const Runevent=(e)=>{
    e.preventDefault()
    let li=document.createElement("li")
    let h1=document.createElement("h1")
    let h2=document.createElement("h2")
    let delbtn=document.createElement("button")
    li.className="list-group-item rounded-0 "
    h1.className="display-5"
    h2.className="display-5"
    delbtn.className="btn btn-sm btn-danger rounded-0 float-end"
    h1.innerText=select.value
    h2.innerText=textarea.value
    delbtn.innerText="Delete"
    
    li.appendChild(h1)
    li.appendChild(h2)
    li.appendChild(delbtn)
    ul.appendChild(li)
    form.reset()

}

form.addEventListener("submit", Runevent)

const delbtn=(e)=>{
   if(e.target.className=="btn btn-sm btn-danger rounded-0 float-end"){
      let li=e.target.parentElement
ul.removeChild(li)
   }

}
ul.addEventListener("click",delbtn)