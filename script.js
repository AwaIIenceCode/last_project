// Получаем кнопку и элемент body
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Проверка сохранённой темы
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.setAttribute("data-theme", savedTheme);
    themeToggle.textContent = savedTheme === "dark" ? "☀️ Day Mode" : "🌙 Night Mode";
}

// Обработчик события
themeToggle.addEventListener("click", () => {
    const currentTheme = body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // Устанавливаем новую тему и сохраняем в localStorage
    body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    // Обновляем текст кнопки
    themeToggle.textContent = newTheme === "dark" ? "☀️ Day Mode" : "🌙 Night Mode";
});