//variables 
const ulMenu=document.querySelector('.menu-ul')
const amburguesa=document.querySelector('.fa-bars')




//eventos
amburguesa.addEventListener('click',()=>{
  ulMenu.classList.toggle('mostrar')
})

window.addEventListener("click", (e) => {
  if (ulMenu.classList.contains("mostrar") && e.target != amburguesa && e.target != ulMenu)
    ulMenu.classList.toggle("mostrar");
});


//funciones