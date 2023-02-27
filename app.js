//Implementación del login
const usuario = "sebastian";
const pass = "javascript"
let usuarioIngresado;
let passIngresado;

while (usuarioIngresado != usuario || passIngresado != pass) {
    usuarioIngresado = prompt('ingresá tu usuario');
    passIngresado = prompt('ingresá tu pass')
}

alert("Ingresaste correctamente");


let toDos = [];

// Clase constructora de tareas a realizar
class ToDo {
    constructor(descripcion, fechaCreacion, fechaLimite, prioridad) {
        this.descripcion = descripcion;
        this.fechaCreacion = fechaCreacion;
        this.fechaLimite = fechaLimite;
        this.prioridad = prioridad;
    }
}

// Función que agrega una tarea a la lista
const agregarToDo = () => {
    const descripcion = prompt('Ingresá la descripción de la tarea');
    const fechaLimite = prompt('Ingresá el deadline de la tarea');
    const fechaCreacion = new Date()
    const prioridad = prompt('Ingresá la prioridad de la tarea (opciones: alta, media, baja');
    const nuevaTarea = new ToDo(descripcion, fechaCreacion, fechaLimite, prioridad)
    toDos.push(nuevaTarea)
    opciones(toDos)
};

// Función que da las opciones del simulador
const opciones = (toDos) => {
    let descripciones = "";
    toDos.forEach(element => {
        descripciones = descripciones + "\n" + element.descripcion + " " + element.fechaCreacion.getDate() + "/" + element.fechaCreacion.getMonth() + "/" + element.fechaCreacion.getFullYear();
    });
    const listaOpciones = prompt(`Estos son los To Do's que tenes actualmente con su fecha de creación:\n${descripciones}\n\n¿que deseas hacer? \n1 para cargar nuevo To Do\n2 para listar las de prioridad alta\n3 para borrar la lista y comenzar de nuevo`)
    switch (listaOpciones) {
        case "1":
            agregarToDo();
            break;
        case "2":
            filtro();
            break;
        case "3":
            borraListado();
            break;
        default:
            opciones(toDos)
    }
};

// Función que permite filtrar por prioridad alta
const filtro = (tareas) => {
    //const prioritarias = toDos.filter((toDo)=>toDo.prioridad === "alta")
    const prioritarias = toDos.filter((element) => element.prioridad === "alta")
    let descripcionPrioritarias = "";
    prioritarias.forEach(element => {
        descripcionPrioritarias = descripcionPrioritarias + "\n" + element.descripcion;
    })

    alert(`Estos son los ToDo con prioridad alta:\n${descripcionPrioritarias}\n\n`)
    opciones(toDos)
};

// Función que borra el listado de tareas
const borraListado = () => {
    toDos = [];
    opciones(toDos);
}

// Función que inicia el proceso
const init = () => {
    agregarToDo()
}

init()