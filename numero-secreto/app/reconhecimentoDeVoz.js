const elementoChute= document.getElementById('chute')
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.lang = 'pt-br'
  recognition.start()

  // quando o reconhecimento de voz comecar eu quero pegar td que esta em result e vou cria uma fic calbck
  recognition.addEventListener('result',onSpeak);



  
  function onSpeak(e){
       chute = e.results[0][0].transcript //  caminho do console
       exibeChuteNaTela(chute);
       verificaSeOChutePossueUmValorValido(chute)

  }
  

  function exibeChuteNaTela(chute){
      elementoChute.innerHTML= `
       <div>voce disse:</div>
       <samp class="box">${chute}</samp>
      `     
}

  