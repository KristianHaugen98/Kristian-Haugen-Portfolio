document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  });
});

const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  console.log("Burger menu clicked!");
  navLinks.classList.toggle("open");
});

// Mørk og lyst bakgrunn modus:

const bakgrunnLys = document.getElementById("theme-mode");
const ikon = bakgrunnLys.querySelector("i"); // Henter ikonet (eller i).

// Sjekker om lagret tema ved sidelasting:
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  ikon.classList.remove("fa-lightbulb");
  ikon.classList.add("fa-moon");
} else {
  document.body.classList.remove("dark-mode");
  ikon.classList.remove("fa-moon");
  ikon.classList.add("fa-lightbulb");
}

//Skjer en hendelse om bruker trykker på knappen:

bakgrunnLys.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    ikon.classList.remove("fa-lightbulb"); //Fjerner lyspære ikonet
    ikon.classList.add("fa-moon"); // Legger til måne ikonet.
    localStorage.setItem("theme", "dark"); //Lagrer dark mode.
  } else {
    // Lys modus
    ikon.classList.remove("fa-moon"); //Fjerner da månen.
    ikon.classList.add("fa-lightbulb"); //Legger til lyspære ikonet.
    localStorage.setItem("theme", "light"); //Lagrer light mode.
  }
});
