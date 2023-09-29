
let IdCounter = 0;

const input = document.querySelector('input[type="text"]');

userInput.addEventListener('submit', (event)=>{
    event.preventDefault();
    addTask();
})

let addTask = ()=>{
    IdCounter++;

    let newValue = input.value;

    list.innerHTML +=`
    <div class="task-container" id="${IdCounter}">
        <label>
            <input type="checkbox">
            ${newValue}
        </label>
        <img src="./imagenes/delete.png" class="closeBtn">
    </div>
    `
    input.value='';

    updateStats();

   };

   list.addEventListener('click', (event)=>{
    
    if(event.srcElement.nodeName == 'INPUT'){
        updateStats();
        //esto llama a modificar texto
        //updateText(event.srcElement.parentNode.id);
    } 
    
    if(event.srcElement.nodeName == 'IMG'){
        deleteTask(event.srcElement.parentNode.id);
    }

    /* esto es para tomar el id del que quiero modificar cuando hace click en el texto 
    if(event.srcElement.nodeName == 'DIV'){
        updateText(event.srcElement.parentNode.id);
    }*/

   })

   let updateStats= ()=>{
    let element = list.querySelectorAll('div');
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked')
    
    stats.innerHTML=`<p>Tareas pendientes: ${element.length-1} - Tareas completadas: ${checkbox.length} </p>`
   

};

   let deleteTask = (id)=>{
        let taskToDelete = document.getElementById(id);
        list.removeChild(taskToDelete);
        updateStats();
   };

    /* aca va la parte de la modificacion del texto */
    let updateText = (id)=>{
    let taskTomodify = document.getElementById(id);

    /*list.removeChild(taskToDelete);
    updateStats();
    labelText
    list.updateText(taskTomodify).value = 'raulo'*/
    
    };








