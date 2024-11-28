let h1 = document.getElementById("h1"); 

// 13.1
h1.addEventListener('click', ()=>{
    alert("Вы кликнули на заголовок - так держать!");
});
 

// 13.2
document.getElementById('changeSemester').addEventListener('click', function() {
    // Список тем второго семестра
    const secondSemesterPractices = [
        "Базовое бэкенд-приложение",
        "HTTP-запросы",
        "JSON и работа с ним",
        "HTTP-ответы",
        "Проектирование API",
        "Роутинг и его настройка",
        "NoSQL базы данных",
        "Обеспечение авторизации и доступа пользователей",
        "Работа сторонних сервисов уведомления и авторизации",
        "Основы ReactJS",
        "Работа с компонентами динамической DOM",
        "Использование хуков в React",
        "Основы микросервисной архитектуры",
        "Разработка классических модулей веб-приложений"
    ];

    // Таблица, куда нужно подставить новые данные
    const tbody = document.getElementById('practices-tbody');

    // Очистка существующих данных
    tbody.innerHTML = '';

    // Добавление строк с темами второго семестра
    secondSemesterPractices.forEach((topic, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${topic}</td>
            <td><input type="checkbox" class="form-check-input"></td>
            <td><input type="checkbox" class="form-check-input"></td>
        `;

        tbody.appendChild(row);
    });
});




// 13.3
document.addEventListener("DOMContentLoaded", () => {
    const photo = document.getElementById("studentPhoto");

    // Увеличение размера при наведении
    photo.addEventListener("mouseover", () => {
        photo.style.transition = 'width 1s ease';
        photo.style.transition = 'height 1s ease';
        photo.style.width = "310px";
        photo.style.height = "210px";
    });

    // Возврат к исходным размерам при уходе курсора
    photo.addEventListener("mouseout", () => {
        photo.style.transition = 'width 0.5s ease';
        photo.style.transition = 'height 0.5s ease';
        photo.style.width = "300px";
        photo.style.height = "200px";
    });

    // Замена изображения при клике
    photo.addEventListener("click", () => {
        photo.src =
            "https://i1.sndcdn.com/artworks-xLsimHlUtvQakYK8-3jrATg-t500x500.jpg";
        photo.alt = "Фото любимого преподавателя";
    });

    // Сообщение при двойном клике
    photo.addEventListener("dblclick", () => {
        alert("Не налегай, у меня не так много любимых преподавателей");
    });
});





// 14.3
const lectures = document.getElementById('lectures');


document.getElementById("open_lect").addEventListener('click', function () {

    if (lectures.classList.contains('visible')) {
        lectures.style.opacity = '0'; // Уменьшаем прозрачность
        setTimeout(() => {
            lectures.style.display = 'none'; // Скрываем после завершения анимации
            lectures.classList.remove('visible');
        }, 800); // Учитываем время анимации (0.8s)
        this.textContent = 'Показать лекции';
    } else {
        lectures.style.display = 'block'; // Отображаем таблицу
        setTimeout(() => {
            lectures.style.opacity = '1'; // Постепенно делаем непрозрачной
            lectures.classList.add('visible');
        }, 0); // Без задержки, чтобы анимация началась сразу
        this.textContent = 'Скрыть лекции';
    }
});

// 14.2
const h2 = document.getElementById('animated-paragraph');


h2.addEventListener('click', () => {
    // Меняем цвет текста
    h2.style.transition = 'color 0.5s ease'; // Плавный переход

    h2.style.color = h2.style.color === 'red' ? 'black' : 'red';
});


// 14.1
h1.addEventListener("mouseover", () => {
    h1.style.transition = 'font-size 0.5s ease-in-out';
    h1.style.fontSize = "33px";
   
});

h1.addEventListener("mouseout", () => {
    h1.style.transition = 'font-size 0.5s ease-in-out';
    h1.style.fontSize = "32px";
   
});