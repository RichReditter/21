const newTask = document.body.querySelector('#placeholder')
console.log(newTask)
document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        // document.querySelector('#newtask').innerHTML += `
        //     <div class="red">
        //         <p> Вы должны написать что-то!</p> 
        //     </div>
        //     `
        alert('Введите что-то')
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        let current_tasks = document.querySelectorAll(".delete");
        for(let i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}
const addedTask = document.body.querySelector('#newtask');
fetch('http://localhost:3000/tasks/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(addedTask)
})
    .then( response => { response.json() })
    .then( json => {
        console.log(json)
    })
