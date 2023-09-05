// Função para adicionar tarefa
function addTask() {
  const taskInput = $("#adicionar-tarefa");
  const taskText = taskInput.val().trim();

  if (taskText === "") {
    alert("Por favor, insira o nome da tarefa.");
    return;
  }

  const taskList = $("#lista-tarefas");
  const taskItem = $("<li>").text(taskText);

  // Adiciona um evento para marcar como concluído ao clicar
  taskItem.on("click", function () {
    $(this).toggleClass("completed");
  });

  taskList.append(taskItem);
  taskInput.val(""); // Limpa o campo de entrada
}

// Adiciona um evento de envio de formulário para adicionar uma tarefa
const taskForm = $("#formulario1");
taskForm.on("submit", function (event) {
  event.preventDefault();
  addTask();
});
