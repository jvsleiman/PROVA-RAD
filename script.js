const checkbox = document.querySelectorAll(".checkbox");
const controleOperacao = document.querySelectorAll(".controle-operacao");
const contadorSticker = document.querySelector(".contador-sticker");
const textArea = document.querySelector(".text-area");
const textoMensagem = document.querySelector(".texto-mensagem");
const botaoSubmit = document.querySelector(".button-submit");

checkbox.forEach((e) => {
  e.addEventListener("change", (event) => {
    validaDados();
  });
});

textArea.addEventListener("change", validaDados);

contadorSticker.addEventListener("change", validaDados);

botaoSubmit.addEventListener("click", (e) => {
  textoMensagem.style = "display: block";
});

controleOperacao.forEach((e) => {
  e.addEventListener("click", (event) => {
    let controle = event.target.textContent;
    if (controle === "-") {
      if (contadorSticker.value > 0) {
        contadorSticker.value = parseInt(contadorSticker.value) - 1;
        validaDados();
      }
    } else if (controle === "+") {
      contadorSticker.value = parseInt(contadorSticker.value) + 1;
      validaDados();
    }
  });
});

function validaDados() {
  let controle = false;
  checkbox.forEach((e) => {
    if (e.checked) {
      controle = e.checked;
    }
  });

  botaoSubmit.disabled = !(
    contadorSticker.value > 0 &&
    textArea.value !== "" &&
    controle
  );
}
