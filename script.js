function addTarefa() {
    
    let btnTarefa = document.querySelector('#criar-tarefa');
    let iptTarefa = document.querySelector('#texto-tarefa');
    let olTarefas = document.querySelector('#lista-tarefas');
    
    btnTarefa.addEventListener('click', function() {
        let createLi = document.createElement('li');
        createLi.innerHTML = iptTarefa.value;
        createLi.className = 'tarefas';
        olTarefas.appendChild(createLi);
        iptTarefa.value = '';
        
    })

}    addTarefa ();

function selecionarTarefa () {

    let olTarefas = document.querySelector('#lista-tarefas');
    
    olTarefas.addEventListener('click', function (event) {
        let selectedTask = document.querySelector('#selected');
        event.target.id = 'selected';
        selectedTask.id = '';
    })
} selecionarTarefa ();