const dark = document.getElementById("dark");
const light = document.getElementById("light");

dark.addEventListener("click",function(){
    const body = document.querySelector("body")
    body.classList.add("bg-dark")
    body.classList.remove("text-dark")
    body.classList.add("text-light")
    body.classList.remove("bg-white")
})

light.addEventListener("click",function(){
    const body = document.querySelector("body")
    body.classList.add("bg-white")
    body.classList.add("text-dark")
    body.classList.remove("text-light")
    body.classList.remove("bg-dark")
})