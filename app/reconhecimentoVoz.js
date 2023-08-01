const elementoChute = document.getElementById('chute');
const numeros = {
    'zero zero': 0,
    'zero': 0,
    '00': 0,
    '01': 1,
    'um': 1,
    'dois': 2,
    'três': 3,
    'quatro': 4,
    'cinco': 5,
    'seis': 6,
    'sete': 7,
    'oito': 8,
    'nove': 9,
    'dez': 10
}

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(event) {
    chute = event.results[0][0].transcript;
    const chuteCerto = corrigeNumeros(chute);
    exibeChute(chuteCerto);
    validaChute(chuteCerto);
}

function exibeChute(chute) {
    elementoChute.innerHTML = `
    <div>Você disse</div>
    <span class="box">${chute}</span>
    `
}
 
function corrigeNumeros (chute){
    for(let numero in numeros){
    if(chute === numero){
        chute = numeros[numero];   
    }         
    }
    return chute;
}

recognition.addEventListener('end', () => {
    recognition.start();
})
