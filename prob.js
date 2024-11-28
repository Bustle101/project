// 11 практика 1 часть

let h1 = document.getElementById("h1");
h1.innerHTML = "Добро пожаловать на наш сайт!";



let h2 = document.getElementById("h2");
h2.style.color = "red";


let frontend_text = document.getElementById("front");
front.innerHTML = "Это новый текст параграфа.";

let video = document.getElementById("video");

video.style.display = "None";


// 14.4
const photo = document.getElementById('studentPhoto');
let rotation = 0; // Начальный угол поворота
let isRotating = false; // Флаг, указывающий, что фото должно вращаться

// Функция для вращения
function rotate() {
    if (!isRotating) return; // Если вращение отключено, выходим
    rotation += 1; // Увеличиваем угол
    photo.style.transform = `rotate(${rotation}deg)`; // Применяем поворот
    requestAnimationFrame(rotate); // Продолжаем анимацию
}

// Включаем вращение при наведении
photo.addEventListener('mouseover', () => {
    if (!isRotating) {
        isRotating = true;
        rotate(); // Запускаем анимацию
    }
});

// Останавливаем вращение при уходе курсора
photo.addEventListener('mouseleave', () => {
    isRotating = false; // Останавливаем вращение
});


