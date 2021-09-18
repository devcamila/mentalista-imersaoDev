let numeroSecreto = parseInt(Math.random(100) * 11);
let tentativas = 3;
document.getElementById("numero").innerHTML = tentativas;

function Chutar() {
  let chute = parseInt(document.getElementById("valor").value);
  let resultado = document.getElementById("resultado");

  function dica() {
    if (chute < numeroSecreto) {
      return (resultado.innerHTML = `chute para cima`);
    } else {
      return (resultado.innerHTML = `chute para baixo`);
    }
  }

  if (tentativas < 4 && chute == numeroSecreto) {
    tentativas--;
    document.getElementById("numero").innerHTML = tentativas;
    resultado.innerHTML = `Acertou! O número secreto é ${numeroSecreto}.`;
    document.getElementById("botao").style.display = "none";
    document.getElementById("novo-jogo").style.display = "block";
  } else if (chute > 10 || chute < 0) {
    resultado.innerHTML = `Digite um número entre 0 e 10!`;
  } else if (isNaN(chute)) {
    resultado.innerHTML = `Digite um número entre 0 e 10!`;
  } else if (chute !== numeroSecreto) {
    if (tentativas > 1) {
      tentativas--;
      document.getElementById("numero").innerHTML = tentativas;
      resultado.innerHTML = `Errou! Tente novamente e ${dica()}`;
    } else if (tentativas <= 1) {
      tentativas--;
      resultado.innerHTML = `Game Over! O número secreto é ${numeroSecreto}.`;
      document.getElementById("numero").innerHTML = tentativas;
      document.getElementById("novo-jogo").style.display = "block";
      document.getElementById("botao").style.display = "none";
    }
  }
}
