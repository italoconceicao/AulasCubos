const comentario = "Esse c0vid é muito perigoso!";

function checarComentario(comentario) {
    if ((comentario.includes("COVID") || comentario.includes("covid") || comentario.includes("Covid"))) {
        console.log(`Comentário bloqueado por conter palavras proibidas.`)
    } else {
        console.log(`Comentário autorizado.`)
    };
};

checarComentario(comentario);