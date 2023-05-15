const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

// Crie uma função que receba três argumentos, sendo eles, a lista de todos os pacientes na fila, o tipo de operação para um paciente, que pode ser atender ou agendar e o nome do paciente.

// Caso a operação informada seja agendar, o paciente em questão deverá ser adicionado ao final da lista. Caso seja atender, o próximo (primeiro) paciente da fila deverá ser removido e não é obrigatório informar o nome do paciente na função.

// Por fim, a função deverá imprimir a lista atualizada, separada por vírgula.

// Ex.: José, Pedro, Maria...

function fila(pacientesDaFila, tipoDeOperacao, nomeDoPaciente) {
    // for (paciente of pacientesDaFila) {
    if (tipoDeOperacao === "agendar") {
        pacientesDaFila.push(nomeDoPaciente);
    } else {
        pacientesDaFila.shift();
    };
    // }
    console.log(pacientesDaFila.join(", "));
};

fila(pacientes, "agendar", "Pedro");