// ====== Task 1: Form Validation + Async Submit (Callback) ======
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", async function (e) {
        e.preventDefault();
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");
        let valid = true;
  
        if (!name.value.trim()) {
          alert("Введите имя");
          valid = false;
        } else if (!email.value.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
          alert("Введите корректный email");
          valid = false;
        } else if (!message.value.trim()) {
          alert("Введите сообщение");
          valid = false;
        }
  
        if (!valid) return;
  
        // имитация отправки (callback + fetch)
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert(`Спасибо, ${name.value}! Мы скоро свяжемся с вами.`);
        form.reset();
      });
    }
  });
  
  // ====== Task 2: Accordion (FAQ) ======
  const faqTitles = document.querySelectorAll(".accordion-title");
  faqTitles.forEach((title) => {
    title.addEventListener("click", () => {
      title.classList.toggle("active");
      const content = title.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
  
  // ====== Task 3: Popup Form ======
  const popupBtn = document.getElementById("openPopup");
  const popup = document.getElementById("popupForm");
  const closeBtn = document.getElementById("closePopup");
  
  // === Звук при клике ===
  const clickSound = new Audio("click.wav"); // добавь звук в проект
  
  if (popupBtn) {
    popupBtn.addEventListener("click", () => {
      clickSound.play();
      popup.style.display = "flex";
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });
  }
  window.addEventListener("click", (e) => {
    if (e.target === popup) popup.style.display = "none";
  });
  
  // ====== Task 4: Change Background Color ======
  const colorBtn = document.getElementById("colorBtn");
  if (colorBtn) {
    const colors = ["#000", "#222", "#ff4040", "#007bff", "#198754"];
    let i = 0;
    colorBtn.addEventListener("click", () => {
      document.body.style.backgroundColor = colors[i];
      i = (i + 1) % colors.length;
    });
  }
  
  // ====== Task 5: Current Date and Time ======
  const timeBlock = document.getElementById("timeBlock");
  function updateTime() {
    if (timeBlock) {
      const now = new Date();
      const formatted = now.toLocaleString("ru-RU", {
        dateStyle: "long",
        timeStyle: "short",
      });
      timeBlock.textContent = formatted;
    }
  }
  setInterval(updateTime, 1000);
  updateTime();
  
// ====== Task 6: Switch Statement — Полное переключение языка ======
const langSelect = document.getElementById("langSelect");
const greeting = document.getElementById("greeting");

if (langSelect) {
  langSelect.addEventListener("change", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const heroTitle = document.querySelector("h1");
    const heroText = document.querySelector(".hero p");
    const heroBtn = document.querySelector(".hero .btn");

    switch (langSelect.value) {
      case "ru":
        greeting.textContent = "Добро пожаловать в Lifestyle Club!";
        heroTitle.textContent = "Лучшие всегда с нами";
        heroText.textContent = "Подберем абонемент и составим план тренировок";
        heroBtn.textContent = "Начать тренироваться";
        navLinks[0].textContent = "Главная";
        navLinks[1].textContent = "Тренеры";
        navLinks[2].textContent = "Услуги";
        navLinks[3].textContent = "Цены";
        navLinks[4].textContent = "Контакты";
        break;

      case "en":
        greeting.textContent = "Welcome to Lifestyle Club!";
        heroTitle.textContent = "The Best Train With Us";
        heroText.textContent = "We’ll help you choose a membership and create your workout plan";
        heroBtn.textContent = "Start Training";
        navLinks[0].textContent = "Home";
        navLinks[1].textContent = "Trainers";
        navLinks[2].textContent = "Services";
        navLinks[3].textContent = "Prices";
        navLinks[4].textContent = "Contacts";
        break;

      case "kz":
        greeting.textContent = "Lifestyle Club-қа қош келдіңіз!";
        heroTitle.textContent = "Ең үздіктер бізбен бірге";
        heroText.textContent = "Біз сізге абонемент таңдап, жаттығу жоспарын жасаймыз";
        heroBtn.textContent = "Жаттығуды бастау";
        navLinks[0].textContent = "Басты бет";
        navLinks[1].textContent = "Жаттықтырушылар";
        navLinks[2].textContent = "Қызметтер";
        navLinks[3].textContent = "Бағалар";
        navLinks[4].textContent = "Байланыс";
        break;
    }
  });
}

// ====== Task 7: Objects, Arrays, Higher-Order Functions ======
const reviews = [
    { name: "Айдана", text: "Отличные тренеры и атмосфера!" },
    { name: "Данияр", text: "Классный зал, рекомендую!" },
    { name: "Марина", text: "После тренировок чувствую себя прекрасно." },
    { name: "Али", text: "Удобный график и доступные цены!" },
    { name: "Жанна", text: "Профессиональные тренеры, дружелюбный персонал." },
  ];
  
  const reviewsContainer = document.getElementById("reviewsContainer");
  if (reviewsContainer) {
    reviews.forEach((r) => {
      const div = document.createElement("div");
      div.className = "col-md-4";
      div.innerHTML = `
        <div class="p-3 bg-dark text-light rounded shadow-sm review-card">
          <h5>${r.name}</h5>
          <p>${r.text}</p>
        </div>
      `;
      reviewsContainer.appendChild(div);
    });
  }
  
  // ====== Task 8: Simple Animation on Hover ======
  const reviewCards = document.querySelectorAll(".review-card");
  reviewCards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      card.style.transform = "scale(1.05)";
      card.style.transition = "transform 0.3s ease";
    });
    card.addEventListener("mouseout", () => {
      card.style.transform = "scale(1)";
    });
  });