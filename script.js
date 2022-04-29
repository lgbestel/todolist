function carregarTarefas () {
    
    let tarefasSalvas = JSON.parse(localStorage.getItem('tarefasSalvas'));
    let olTarefas = document.querySelector('#lista-tarefas');

    olTarefas.innerHTML = tarefasSalvas;
} carregarTarefas ();


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
        if (selectedTask == null) {
        event.target.id = 'selected'; 
        } else {
        selectedTask.removeAttribute('id');
        event.target.id = 'selected';   
        }
    })
} selecionarTarefa ();

function finalizarTarefa () {

    let olTarefas = document.querySelector('#lista-tarefas');
    
    olTarefas.addEventListener('dblclick', function (event) {
        if (event.target.classList.contains('completed')) {
            event.target.classList.remove('completed');
        } else {
            event.target.classList.add('completed');
        }
    })
} finalizarTarefa ();

function clearAll () {

    let btnApaga = document.querySelector('#apaga-tudo');
    let olTarefas = document.querySelector('#lista-tarefas');

    btnApaga.addEventListener('click', function(){
        olTarefas.innerHTML = '';
    })

} clearAll ();

function removerFinalizados () {

    let btnRemover = document.querySelector('#remover-finalizados');

    btnRemover.addEventListener('click', function(){ 
        let finalizados = document.querySelectorAll('.completed');
        console.log(finalizados);
        for (let i = 0; i < finalizados.length; i += 1) {
            finalizados[i].remove();    
        }
   })

} removerFinalizados ();

function salvarTarefas () {
    let btnSalva = document.querySelector('#salvar-tarefas');
    btnSalva.addEventListener('click', function () { 
        let tarefas = document.querySelector('#lista-tarefas').innerHTML;
        localStorage.setItem('tarefasSalvas', JSON.stringify(tarefas));
    })
}salvarTarefas ();