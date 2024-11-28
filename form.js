       // Циклически меняем цвет текста
       const colors = ["blue", "rgb(86, 7, 113)", "rgba(203, 144, 255, 0.495)", "rgb(107, 91, 120)"];
       let index = 0;

       const successMessage = document.getElementById("success-message");

       function changeColor() {
           successMessage.style.color = colors[index];
           index = (index + 1) % colors.length; // Переход к следующему цвету
       }

       setInterval(changeColor, 1000); // Смена цвета каждые 1 секунду