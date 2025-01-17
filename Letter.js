const loveMessage = "I love you more than words can say.";
let index = 0;
const letterText = document.querySelector('.letter-text');

function revealLetter() {
    if (index < loveMessage.length) {
        letterText.textContent += loveMessage.charAt(index);
        index++;
        setTimeout(revealLetter, 100);
    }
}
