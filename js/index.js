//  Função que permite o drop das respostas ao clicar em uma pergunta na página de seguros
function dropQuestions() {
  const perguntas = document.querySelectorAll(".perguntas-lista li div");
  const hiddenText = document.querySelectorAll(".perguntas-lista li > p");
  const setas = document.querySelectorAll(".perguntas-lista li > div > div");

  function toggleDrop(e) {
    const atributo = e.currentTarget.getAttribute("data-target");
    const alvo = document.getElementById(atributo);

    setas.forEach((seta) => {
      seta.classList.remove("ativo");
      if (seta.classList.contains(atributo)) {
        seta.classList.add("ativo");
      }
    });

    hiddenText.forEach((text) => {
      text.classList.remove("ativo");
    });
    alvo.classList.add("ativo");
  }

  perguntas.forEach((pergunta) => {
    pergunta.addEventListener("click", toggleDrop);
  });
}
dropQuestions();

// função que permite a troca da imagem principal nas páginas individuais das bicicletas
function galery() {
  const imagens = document.querySelectorAll(".nimbus-img img");
  const firstImg = document.querySelector(".nimbus-img");

  function changeImg(e) {
    firstImg.prepend(e.currentTarget);
  }

  imagens.forEach((imagen) => {
    imagen.addEventListener("click", changeImg);
  });
}
galery();

// Ativa a linha em baixo do item no header de acordo com a página que o cliente está
function HeaderItemActive() {
  const params = new URLSearchParams(location.search);
  const param = params.get("page");

  const head = document.querySelectorAll(".header-menu a");

  function verifyItem(item) {
    if (item.getAttribute("data-param") === param) {
      item.classList.add("ativo");
    }
  }

  head.forEach((item) => {
    verifyItem(item);
  });
}
HeaderItemActive();


// checa o formulário automaticament a partir dos parâmetros do URL
function checkForm() {
  const params = new URLSearchParams(location.search);
  const param1 = params.get("tipo");
  if (param1) {
    const param2 = params.get("item");

    const tag1 = document.getElementById(param1);
    const tag2 = document.getElementById(param2);
    tag1.checked = true;
    tag2.checked = true;
  }
}
checkForm();
