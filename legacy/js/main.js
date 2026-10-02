// Typewriter loop — "There is no wrong choice" em 4 idiomas
const texts = [
  "Relaxa, aqui qualquer escolha é a certa.",              // Português
  "Relax, any choice here is the right one.",           // Inglês
  "Détends-toi, ici, tout choix est le bon.",      // Francês
  "放轻松，在这里，怎么选都对。"                        // Mandarim
];

const textElement = document.getElementById("text");

let textIndex = 0;      // Qual frase estamos a usar
let charIndex = 0;      // Quantas letras já foram escritas
let isDeleting = false; // Se estamos a apagar ou a escrever

function typeEffect() {

  const currentText = texts[textIndex];

  if (!isDeleting) {
    // Escrever
    textElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500); // pausa antes de apagar
      return;
    }

  } else {
    // Apagar
    textElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length; // próxima frase
    }
  }

  const speed = isDeleting ? 50 : 100;
  setTimeout(typeEffect, speed);
}

typeEffect();