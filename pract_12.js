
// 12 практика 1 часть
function showMessage(message) {
    console.log(message);
}

// Функция изменения цвета фона страницы
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Функция переключения видимости элемента по селектору
function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        const currentDisplay = window.getComputedStyle(element).display;
        element.style.display = currentDisplay === "none" ? "block" : "none";
    } else {
        console.warn(`Элемент с селектором "${selector}" не найден.`);
    }
}


function updateH1WithUTMTerm() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get("utm_term");
    const h1Element = document.getElementById("bro");
    if (h1Element) {
        h1Element.textContent = utmTerm ? utmTerm : h1Element.textContent;
    } else {
        console.warn("Элемент H1 не найден.");
    }
}

// 12 практика 4 часть
function logCurrentTime() {
    const now = new Date();
    const timeString = now.toTimeString().split(" ")[0];
    console.log(`Текущее время: ${timeString}`);
}


function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}

// Вызов функций 
showMessage("Скрипт загружен!");
logCurrentTime();


document.addEventListener("DOMContentLoaded", () => {
    // Сброс цвета фона
    resetBackgroundColor();

    // Изменение цвета фона
    changeBackgroundColor("lightblue");

    // Переключение видимости элемента с классом .content
    toggleVisibility("#textt");

    // Обновление текста H1 на основе utm_term
    updateH1WithUTMTerm();
});
