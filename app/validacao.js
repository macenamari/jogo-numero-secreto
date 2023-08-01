function validaChute(chute) {

    const numero = +chute;

    if(chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido! Esse valor não é um número.</div><div>Continue tentando...</div>';
        return
    }

    if(valorNaoPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido! O número secreto está entre ${menorValor} e ${maiorValor}.</div>
        </div><div>Continue tentando...</div>`;
        return
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = 
        `<h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        
        <button id="restart" class="btn-restart">Jogar novamente</button>
        `
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        </div><div>Continue tentando...</div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        </div><div>Continue tentando...</div>`
    }
}

function valorNaoPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

document.body.addEventListener('click', (event) => {
    if(event.target.id == 'restart') {
        window.location.reload();
    }
})
