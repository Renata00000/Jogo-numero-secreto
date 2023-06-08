
const menorValor= 10;
const maiorValor=1000;
const numeroSecreto = gerarNumeroSecreto()
function gerarNumeroSecreto(){
// Math.randon retorna um numero aleatorio, + para n virem os numeros depois da virgula usa parseInt tranformando em um numero inteiro *represe entre 0 e o num que vem depois
    return parseInt(Math.random() * maiorValor +1);
}

console.log( 'numero secreto e ', numeroSecreto);

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML =maiorValor

