const startDate = new Date('2024-01-04T00:00:00');

function updateTime() {
  const now = new Date();
  const diffInMs = now - startDate;

  const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const remainingAfterDays = diffInMs % (1000 * 60 * 60 * 24);

  const hours = Math.floor(remainingAfterDays / (1000 * 60 * 60));
  const remainingAfterHours = remainingAfterDays % (1000 * 60 * 60);

  const minutes = Math.floor(remainingAfterHours / (1000 * 60));
  const seconds = Math.floor((remainingAfterHours % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hrs').textContent = String(hours).padStart(2, '0');
  document.getElementById('mins').textContent = String(minutes).padStart(2, '0');
  document.getElementById('sec').textContent = String(seconds).padStart(2, '0');
}

function performSearch() {
  const container = document.querySelector('.container');
  container.classList.remove('hidden'); // Show the container
  updateTime(); // Update time immediately
}

// Update the clock every second
setInterval(updateTime, 1000);

// Message and image arrays
const messages = [
  "I love ur smile, ur laugh any indication of u being happy and its the most beautiful thing to me",
  "I love ur annoying lil attitudes and ur lil sass...even if it pisses me off sometimes",
  "I love how I can always come back to u with any problem and u will be there with a solution to fix it",
  "I love the way u touch my face whenever u wanna kiss me",
  "I love the way u play with my hair when am driving",
  "I love the way u rub our feet together when we r cuddling in bedd",
  "I love the way u look at me",
  "I love how YOU are mine",
  "I love the amount of charisma u have in bed literally a goddess",
  "I love how am priviliged to look and kiss u whenever I want to",
  "LITERALLy the cutest human ever with ur lil gigles and doing that thing with biting ur finger when ur guilty with smth AHHH",
  "I LOVE LOVE LOVE how ur body is and ur defined waist-line",
  "I love how u always baby me and let me cuddle with u",
  "I love ur need for physical touch the enitre time we r together",
  "I love the way u kiss me",
  "I love how ur the SOFTEST person when ur alone with me and how its a side that noone will ever see but me",
  "I love the way when u sit on my lap and flip ur hair to kiss me..",
  "I love the way every time u sing or dance to a song u look like the biggest model",
  "I love the way u use the weirdest sense and expect me to understand... then adorablly explaining it to me",
  "I love how u made me comfortable with u and having me doing things that ive never did",
  "I love ur mean attitudes while am so inlove with u",
  "I love my motherly figure, my GF..."
];

const image = [
  "smile.jpg",     // Corresponding to message 1
  "done.jpg",    // Corresponding to message 2
  "shoulder.jpg",   // Corresponding to message 3
  "face.jpg",  // Corresponding to message 4
  "car.jpg",  // Corresponding to message 5
  "feet.jpg",
  "eyes.jpg",
  "mine.jpg",
  "charisma.jpg",
  "kissu.jpg",
  "laughh.jpg",
  "body.jpg",
  "babyme.jpg",
  "hands.jpg",
  "cheeksss.jpg",
  "cutee.jpg",
  "bobo.jpg",
  "godess.jpg",
  "sense.jpg",
  "mwah.jpg",
  "how.jpg",
  "gf.jpg"
];

let currentMessageIndex = 0;

function updateContent() {
  const messageElement = document.getElementById('dynamic-message');
  const imageElement = document.getElementById('dynamic-image');

  // Fade out effect before updating content
  messageElement.classList.add('fade-out');
  imageElement.classList.add('fade-out');

  setTimeout(() => {
    messageElement.textContent = messages[currentMessageIndex];
    imageElement.src = image[currentMessageIndex];

    // Fade in effect after content update
    messageElement.classList.remove('fade-out');
    imageElement.classList.remove('fade-out');
    messageElement.classList.add('fade-in');
    imageElement.classList.add('fade-in');
  }, 500); // Update after 500ms
}

function nextMessage() {
  currentMessageIndex = (currentMessageIndex + 1) % messages.length;
  updateContent();
}

function prevMessage() {
  currentMessageIndex = (currentMessageIndex - 1 + messages.length) % messages.length;
  updateContent();
}

// Automatically change messages every 5 seconds
setInterval(nextMessage, 5000); // Change 5000 to the desired interval in milliseconds

// Initialize with the first message and image
window.onload = updateContent;

// Event listeners for image clicks
document.getElementById('memory-img').addEventListener('click', function() {
  window.location.href = 'HomePage.html'; 
});

document.getElementById('letter-img').addEventListener('click', function() {
  window.location.href = 'HomePage.html'; 
});

// Debounced scroll event
let timeoutId;
window.addEventListener('scroll', function() {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    const section = document.querySelector('.letter-section');
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
      section.classList.add('visible');
    }
  }, 100); // Adjust the delay as needed
});

// JavaScript to apply random positions to each image
document.querySelectorAll('.floating-image').forEach((image) => {
  image.style.setProperty('--rotation', Math.random());
  image.style.setProperty('--posX', Math.random());
  image.style.setProperty('--posY', Math.random());
});

// openNote function to display notes on click
function openNote(text, imageUrl) {
  alert(text); // Replace this with custom modal if desired
}



document.addEventListener("DOMContentLoaded", () => {
  let currentAudio = null;

  document.querySelectorAll(".vinyl").forEach((vinyl) => {
    vinyl.addEventListener("click", () => {
      const audioSrc = vinyl.getAttribute("data-audio");

      // Stop current audio if any is playing
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        document.querySelector(".vinyl.playing")?.classList.remove("playing");
      }

      // Play new audio
      currentAudio = new Audio(audioSrc);
      currentAudio.play();

      // Add spinning animation
      vinyl.classList.add("playing");

      // Stop animation when audio ends
      currentAudio.addEventListener("ended", () => {
        vinyl.classList.remove("playing");
      });
    });
  });
});


