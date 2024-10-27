const btnTarefa = document.querySelector("#btnTarefa")

btnTarefa.addEventListener("click", () => {
    const tarefaInput = document.querySelector("#tarefaInput")
    const listTarefa = document.querySelector("#listTarefa")

    if (tarefaInput.value === '') {
        alert("Adicione uma tarefa!")
        return
    }

    const li = document.createElement("li")
    li.innerHTML = tarefaInput.value
    
    const removerTarefa = document.createElement("button");
    removerTarefa.classList.add("btn-remove")
    removerTarefa.textContent = "Remover";
    removerTarefa.addEventListener("click", () => {
        listTarefa.removeChild(li);
    });

    const atualizarTarefa = document.createElement("button");
    atualizarTarefa.textContent = "Atualizar";
    atualizarTarefa.addEventListener("click", () => {
        const novaTarefa = prompt("Atualize sua tarefa:", tarefaInput.value);
        if (novaTarefa !== null && novaTarefa !== '') {
            li.innerHTML = novaTarefa;
            li.appendChild(removerTarefa);
            li.appendChild(atualizarTarefa);
        }
    });

    li.appendChild(removerTarefa);
    li.appendChild(atualizarTarefa);
    listTarefa.appendChild(li);

    tarefaInput.value = '';
})