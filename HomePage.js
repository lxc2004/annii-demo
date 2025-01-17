const heartContainer = document.querySelector('.heart-container');

function createHearts() { for (let i = 0; i < 50; i++) 
    { const heart = document.createElement('div'); heart.classList.add('heart'); 
    heart.style.left = Math.random() * 100 + 'vw'; 
    heart.style.top = Math.random() * 100 + 'vh'; heartContainer.appendChild(heart); } }

createHearts(); 


