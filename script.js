    function addTarefa() {
    
    let btnTarefa = document.querySelector('#criar-tarefa');
    let iptTarefa = document.querySelector('#texto-tarefa');
    let olTarefas = document.querySelector('#lista-tarefas');
    btnTarefa.addEventListener('click', function() {
        let createLi = document.createElement('li');
        createLi.innerHTML = iptTarefa.value;
        olTarefas.appendChild(createLi);
        iptTarefa.value = '';
    })
}    addTarefa ();