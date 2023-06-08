function  verificaSeOChutePossueUmValorValido(chute){
    const numero = +chute  //torna um numero inteiro 
    
     if(chuteForInvalido(numero)){
    elementoChute.innerHTML += '<div> valor invalido.</div>'
   }

if (numeroForMaiorOumenorQueOValorPermitido()){
  elementoChute.innerHTML += `<div> valor invalido. o numero secreto precisa estar entre, ${menorValor} e 
  ${maiorValor}</div>`;

 }

 if(numero=== numeroSecreto){
    document.body.innerHTML =`
    <h2>voce acertou</h2/>
    <h3>o numero secreto era ,${numeroSecreto}</h3>
    `
 }

}

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOumenorQueOValorPermitido(){
return numero > maiorValor || numero < menorValor
}