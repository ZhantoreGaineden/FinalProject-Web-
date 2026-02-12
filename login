<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Вход - Lifestyle Club</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-dark text-light text-center py-5">

  <h2 class="mb-4">Вход</h2>
  <form id="loginForm" class="w-50 mx-auto">
    <input type="email" id="email" class="form-control mb-3" placeholder="Email" required>
    <input type="password" id="password" class="form-control mb-3" placeholder="Пароль" required>
    <button type="submit" class="btn btn-danger w-100">Войти</button>
  </form>

  <p class="mt-3">Нет аккаунта? <a href="signup.html" class="text-danger">Зарегистрироваться</a></p>

  <script>
    document.getElementById("loginForm").addEventListener("submit", e => {
      e.preventDefault();
      const user = JSON.parse(localStorage.getItem("user"));
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (user && user.email === email && user.password === password) {
        alert("Добро пожаловать, " + user.name + "!");
        localStorage.setItem("loggedIn", "true");
        window.location.href = "profile.html";
      } else {
        alert("Неверный логин или пароль!");
      }
    });
  </script>
</body>
</html>