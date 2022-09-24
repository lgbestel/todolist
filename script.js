/* eslint-disable no-param-reassign */
const olTarefas = document.querySelector('#lista-tarefas');

function carregarTarefas() {
  const tarefasSalvas = JSON.parse(localStorage.getItem('tarefasSalvas'));
  olTarefas.innerHTML = tarefasSalvas;
} carregarTarefas();

function addTarefa() {
  const btnTarefa = document.querySelector('#criar-tarefa');
  const iptTarefa = document.querySelector('#texto-tarefa');
  // const olTarefas = document.querySelector('#lista-tarefas');
  btnTarefa.addEventListener('click', () => {
    const createLi = document.createElement('li');
    createLi.innerHTML = iptTarefa.value;
    createLi.className = 'tarefas';
    olTarefas.appendChild(createLi);
    iptTarefa.value = '';
  });
} addTarefa();

function selecionarTarefa() {
  // const olTarefas = document.querySelector('#lista-tarefas');

  olTarefas.addEventListener('click', (event) => {
    const selectedTask = document.querySelector('#selected');
    if (selectedTask == null) {
      event.target.id = 'selected';
    } else {
      selectedTask.removeAttribute('id');
      event.target.id = 'selected';
    }
  });
} selecionarTarefa();

function finalizarTarefa() {
  // const olTarefas = document.querySelector('#lista-tarefas');

  olTarefas.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
} finalizarTarefa();

function clearAll() {
  const btnApaga = document.querySelector('#apaga-tudo');
  // const olTarefas = document.querySelector('#lista-tarefas');

  btnApaga.addEventListener('click', () => {
    olTarefas.innerHTML = '';
    localStorage.clear();
  });
} clearAll();

function removerFinalizados() {
  const btnRemover = document.querySelector('#remover-finalizados');

  btnRemover.addEventListener('click', () => {
    const finalizados = document.querySelectorAll('.completed');
    console.log(finalizados);
    for (let i = 0; i < finalizados.length; i += 1) {
      finalizados[i].remove();
    }
  });
} removerFinalizados();

function removerSelecionado() {
  const btnRemover = document.querySelector('#remover-selecionado');

  btnRemover.addEventListener('click', () => {
    const selecionado = document.querySelector('#selected');
    selecionado.remove();
  });
} removerSelecionado();

function salvarTarefas() {
  const btnSalva = document.querySelector('#salvar-tarefas');
  btnSalva.addEventListener('click', () => {
    const tarefas = document.querySelector('#lista-tarefas').innerHTML;
    localStorage.setItem('tarefasSalvas', JSON.stringify(tarefas));
  });
} salvarTarefas();
