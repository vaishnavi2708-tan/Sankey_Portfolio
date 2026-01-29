const toggle = document.getElementById("themeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
}

toggle.onclick = () => {
    body.classList.toggle("dark");
    localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
};

const text = ["Frontend Developer", "Learner", "Problem Solver"];
let index = 0;
let charIndex = 0;
const speed = 100;
const animated = document.querySelector(".animated-text");

function typeEffect() {
    if (charIndex < text[index].length) {
        animated.textContent += text[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, speed);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        animated.textContent = text[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        index = (index + 1) % text.length;
        setTimeout(typeEffect, 500);
    }
}

typeEffect();
