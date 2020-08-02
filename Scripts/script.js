//************************************** eventos *************************************************************//
//evento de opciones de opciones
let iconoOpcion = document.getElementsByClassName('far fa-clock')[0];
let opcion = document.getElementsByClassName('opciones')[0];
opcion.addEventListener("click",()=>{
    opcion.style.cssText = 'display: enable;';
});
//evento de nueva tarea
let botonNuevaTarea = document.getElementById('Boton');
botonNuevaTarea.addEventListener('click',()=>{
    let titulonuevo = prompt('Ingrese el titulo de nueva tarea');
    let descripcion = prompt('Ingrese descripcion de la tarea');
    let hora = prompt('Ingresar el tiempo en horas');
    if (titulonuevo==null && descripcion==null && hora==null) {   
    }else{
        añadirTarea(titulonuevo,descripcion,hora);
        crearNuevaTarea(titulonuevo,descripcion,hora);
        agregarEventoOpciones();
        cargarTareasCargadas();
    } 
});
//evento de visualizar detalle
function random(number) {
    return Math.floor(Math.random() * (number+1));
}
function bgChange() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}
function agregarEventoOpciones(){
    let opciones = document.getElementsByClassName('fas fa-ellipsis-v')
    for (let i = 0; i < opciones.length; i++) {
        opciones[i].onclick = function(e){
            e.target.style.backgroundColor =  bgChange();
            console.log("hola"+i);
        }    
    }   
}
//************************************** Funciones *************************************************************//
function crearNuevaTarea(titulo, descrip,hora){   
    let contenedor =  document.getElementById('contenedorTareas');
    let tarea = document.getElementsByClassName('Tareas')[0];
    
    let tareaNueva = tarea.cloneNode(true);
    
    let tituloNuevo = tarea.getElementsByClassName('titulito')[0];
    let descripNueva = tarea.getElementsByClassName('descripcion')[0];
    let tiempoFaltante = tarea.getElementsByClassName('tiempoFaltante')[0];
    tituloNuevo.textContent = titulo;
    descripNueva.textContent = descrip;
    tiempoFaltante.textContent = hora;
    contenedor.insertBefore(tareaNueva,contenedor.firstChild)
}
let listaTareas = []
function añadirTarea(titulo, descrip,hora){
    let NuevaTarea = {
        Titulo : titulo,
        Descripcion : descrip,
        Tiempo : hora
    };
    listaTareas.push(NuevaTarea);
    guardarTareaStorage(listaTareas);
}
function guardarTareaStorage(listaTarea){
    localStorage.setItem('localTareaList',JSON.stringify(listaTarea));
}
function cargarTareasCargadas(){
    let tareaGuardada = JSON.parse(localStorage.getItem('localTareaList'));
    console.log(tareaGuardada);
}
function borrarTarea(){
    
}
window.onload = () => {
    cargarTareasCargadas();
    
}