const tabs = document.querySelectorAll(".nav-center li");
const sections = document.querySelectorAll("section");
const logo = document.getElementById("logo");
const toggleBtn = document.getElementById("theme-toggle");
const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    tabs.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");

    const targetClass = this.getAttribute("data-section");
    const targetSection = document.querySelector("." + targetClass);

    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

logo.addEventListener("click", function () {
  document.querySelector(".intro").scrollIntoView({ behavior: "smooth" });
});

toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "Light";
  } else {
    toggleBtn.textContent = "Dark";
  }
});

sections.forEach((section) => {
  section.classList.add("section-hidden");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("section-hidden");
        entry.target.classList.add("section-show");
      }
    });
  },
  {
    threshold: 0.3,
  },
);

sections.forEach((section) => {
  observer.observe(section);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const number = document.getElementById("number").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || number === "" || message === "") {
    formMessage.textContent = "Please fill all fields.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Message sent successfully!";
  formMessage.style.color = "green";

  form.reset();
});
