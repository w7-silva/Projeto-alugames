let jogosAlugados = 0;

function quantidadeJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function verificarPalindromo(palavra) {
    let palavraNormalizada = palavra.toLowerCase().replace(/[^a-z0-9]/g, '');
    let palavraInvertida = palavraNormalizada.split('').reverse().join('');
    return palavraNormalizada === palavraInvertida;
}

function ordenarNumeros(a, b, c) {
    const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}

function alterarStatus(id) {
    let jogoPressionado = document.getElementById(`game-${id}`);
    let imagem = jogoPressionado.querySelector('.dashboard__item__img');
    let botao = jogoPressionado.querySelector('.dashboard__item__button');
    let nomeDoJogo = jogoPressionado.querySelector('.dashboard__item__name');

    if (verificarPalindromo(nomeDoJogo.textContent)) {
        alert(`${nomeDoJogo.textContent} é um palíndromo!`);
    } else {
        alert(`${nomeDoJogo.textContent} não é um palíndromo.`);
    }

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if(confirm(`Você confirma que deseja realizar a devolução do jogo ${nomeDoJogo.textContent}?`))
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        jogosAlugados--;
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;
    }

   quantidadeJogosAlugados(); 
}

ordenarNumeros(3, 1, 5);

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    quantidadeJogosAlugados();
});