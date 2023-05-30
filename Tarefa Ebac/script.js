@@ -1,23 +1,33 @@
const form = document.getElementById("form");
let formEvalido = false;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  validaForm();
});

function validaForm() {
  let campoA = document.getElementById("campo-a");
  let campoB = document.getElementById("campo-b");
  let mensagemSucesso = `Parabéns!!!  <b>${campoB.value}</b> é maior que o <b> ${campoA.value}</b>!!!`;
  let mensagemErro = `Error!!! <b> ${campoB.value} </b> é menor que o <b> ${campoA.value}</b>!!!`;
  let formEvalido = campoB.value > campoA.value;
  if (formEvalido) {
    alert("Está certo!");
    let containerSucesso = document.querySelector(".mensagem-certa");
    containerSucesso.innerHTML = mensagemSucesso;
    containerSucesso.style.display = "block";

    campoA.value = "";
    campoB.value = "";
  } else {
    alert("Está errado!");
    let containerErro = document.querySelector(".mensagem-erro");
    containerErro.innerHTML = mensagemErro;
    containerErro.style.display = "block";

    campoA.value = "";
    campoB.value = "";
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  validaForm();
});
function limparMensagem() {}