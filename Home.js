const heartContainer = document.querySelector('.heart-container');

function createHearts() {
    for (let i = 0; i < 90; i++) {
      let collision = true;
      let heart;
  
      while (collision) {
        heart = document.createElement('div');
        heart.classList.add('heart');
  
        const left = Math.random() * window.innerWidth;
        const top = Math.random() * window.innerHeight;
  
        heart.style.left = `${left}px`;
        heart.style.top = `${top}px`;
  
        collision = false;
  
        for (let j = 0; j < heartContainer.children.length; j++) {
          const existingHeart = heartContainer.children[j];
          const distance = calculateDistance(heart, existingHeart);
  
          if (distance < 50) { // adjust the distance threshold as needed
            collision = true;
            break;
          }
        }
      }
  
      heartContainer.appendChild(heart);
    }
  }
    
  
  function calculateDistance(heart1, heart2) {
    const x1 = parseFloat(heart1.style.left);
    const y1 = parseFloat(heart1.style.top);
    const x2 = parseFloat(heart2.style.left);
    const y2 = parseFloat(heart2.style.top);
  
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }

  
  createHearts();

  function handleYes() {
    alert("Yay! I love you too!");
}


// const noBtn = document.querySelector('.no-btn');
// const card = document.querySelector('.card');

// noBtn.addEventListener('mouseover', () => {
//     // Get the dimensions and position of the card
//     const cardRect = card.getBoundingClientRect();

//     // Calculate the maximum X and Y positions to keep the button inside the card
//     const maxX = cardRect.width - noBtn.offsetWidth;
//     const maxY = cardRect.height - noBtn.offsetHeight;

//     // Generate random X and Y positions within the allowed range
//     const randomX = Math.random() * maxX;
//     const randomY = Math.random() * maxY;

//     // Move the button to the new random position
//     noBtn.style.position = 'absolute'; // Change to absolute positioning
//     noBtn.style.left = `${randomX}px`;
//     noBtn.style.top = `${randomY}px`;
// });



const noBtn = document.querySelector('.no-btn');
const card = document.querySelector('.card');


noBtn.addEventListener('mouseover', () => {


  // Manually set card and button dimensions
const cardWidth = 500; // Same as CSS width
const cardHeight = 200; // Same as CSS height
const buttonWidth = 120; // Adjust based on actual button size
const buttonHeight = 40;  // Adjust based on actual button size

    // Calculate max X and Y to keep the button inside the card
    const maxX = cardWidth - buttonWidth;
    const maxY = cardHeight - buttonHeight;

    // Generate random X and Y positions
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Apply the new position to the "No" button
    noBtn.style.position = 'absolute'
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

function openEnvelope() {
    const card = document.querySelector('.card');
    card.style.transform = 'translate(-50%, -50%) scale(1)';
    card.style.opacity = '1';
  }