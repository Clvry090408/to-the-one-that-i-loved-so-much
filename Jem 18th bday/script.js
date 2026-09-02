const openButton = document.getElementById("openButton");
const welcome = document.getElementById("welcome");
const mainContent = document.getElementById("mainContent");

const musicButton = document.getElementById("musicButton");
const birthdaySong = document.getElementById("birthdaySong");


// =========================
// OPEN THE WEBSITE
// =========================

openButton.addEventListener("click", () => {

    welcome.style.opacity = "0";

    setTimeout(() => {

        welcome.style.display = "none";

        mainContent.classList.remove("hidden");
        mainContent.classList.add("fade-in");

        createPetals();

    }, 800);

});


// =========================
// MUSIC
// =========================

musicButton.addEventListener("click", () => {

    if (birthdaySong.paused) {

        birthdaySong.play();

        musicButton.textContent = "❚❚";

    } else {

        birthdaySong.pause();

        musicButton.textContent = "▶";

    }

});


// =========================
// FALLING PETALS
// =========================

function createPetal() {

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.textContent = "✦";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    petal.style.fontSize =
        (10 + Math.random() * 15) + "px";

    document.body.appendChild(petal);


    setTimeout(() => {

        petal.remove();

    }, 10000);

}


function createPetals() {

    setInterval(() => {

        createPetal();

    }, 500);

}