// Marcação da linha abaixo do menu
const links = document.querySelectorAll(".header-menu a");
links.forEach((item) => {
  if (location.href.includes(item.href)) {
    item.classList.add("ativo");
  }
});

// Ativar itens do orçamento.
const params = new URLSearchParams(location.search);
params.forEach((item) => {
  const element = document.querySelector(`[type="radio"][value="${item}"]`);
  if (element) element.checked = true;
});

// Perguntas frequentes
const dts = document.querySelectorAll("dt");
dts.forEach((dt) => {
  dt.addEventListener("click", () => {
    dt.parentElement.classList.toggle("ativa");
  });
});

// Galeria de imagens
const galeria = document.querySelectorAll(".area-imagens img");
const galeriaContainer = document.querySelector(".area-imagens");

galeria.forEach((img) => {
  img.addEventListener("click", () => {
    if (matchMedia("(min-width: 1000px)").matches) {    //media query dentro do próprio css. E propriedade matches de verdadeiro ou falso.
      galeriaContainer.prepend(img);
    }
  });
});

if (window.SimpleAnime) new SimpleAnime();
