const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];


function agendarPaciente(pacientesDaFila, nomeDoPaciente) {
    pacientesDaFila.push(nomeDoPaciente);
    console.log(pacientesDaFila.join(", "));
};

function atenderPaciente(pacientesDaFila) {
    pacientesDaFila.shift();
    console.log(pacientesDaFila.join(", "));
};

function cancelarAtendimento(pacientesDaFila, nomeDoPaciente) {
    let indiceDoPaciente = pacientesDaFila.indexOf(nomeDoPaciente);
    pacientesDaFila.splice(indiceDoPaciente, 1);
    console.log(pacientesDaFila.join(", "));
};

cancelarAtendimento(pacientes, "João")