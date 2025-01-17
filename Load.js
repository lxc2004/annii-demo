var counter = 0;
window.addEventListener("DOMContentLoaded", move=() => {
if (counter == 0){
    j=1;
    var elem = document.querySelector(".progress-done");
    var width = 0;
    var main = setInterval(frame, 30);
    function frame() {
        if (width >= 100) {
            clearInterval(main);
            window.location.href = "Home.html";
        } else {
            width++;
            elem.style.width = width + "%";
            elem.innerHTML = width + "%";
        }

    }
}
});