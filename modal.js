// Pega o modal
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");

// Lista de imagens com seus respectivos ids
var imgs = ["img1", "img2", "img3"];

// Função para abrir o modal com a imagem correspondente
imgs.forEach(function(imgId) {
  var img = document.getElementById(imgId);

  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src; // Define a imagem clicada como a imagem do modal
  }
});

// Pega o botão de fechar
var span = document.getElementsByClassName("close")[0];

// Fecha o modal
span.onclick = function() {
  modal.style.display = "none";
}

// Variáveis para controlar o zoom
var zoomLevel = 1;
var zoomFactor = 0.1; // Fator de zoom por evento de rolagem

// Adiciona evento de rolagem no modal
modalImg.addEventListener('wheel', function(event) {
  event.preventDefault(); // Previne o comportamento padrão da rolagem

  // Zoom in ou zoom out
  if (event.deltaY < 0) {
    zoomLevel += zoomFactor; // Rolando para cima (zoom in)
  } else {
    zoomLevel -= zoomFactor; // Rolando para baixo (zoom out)
  }

  // Limita o zoom para um intervalo razoável
  if (zoomLevel < 0.5) zoomLevel = 0.5;  // Limite mínimo
  if (zoomLevel > 3) zoomLevel = 3;      // Limite máximo

  // Aplica o zoom à imagem
  modalImg.style.transform = 'scale(' + zoomLevel + ')';
});