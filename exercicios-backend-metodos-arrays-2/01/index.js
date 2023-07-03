const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

const posicao = livros.findIndex((livro) => {
    return livro === nomeDoLivro
}) + 1;

console.log(`O Livro está na posição ${posicao}`);