// 11 практика часть 2, 3
const formData = {
    name: '',
    email: '',
    phone: '',
    country: '',
    date: '',
    comment: '',
   
    printData() {
        console.log(`Имя: ${this.name}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Телефон: ${this.phone}`);
        console.log(`Страна: ${this.country}`);
        console.log(`Дата рождения: ${this.date}`);
        console.log(`Комментарий: ${this.comment}`);
        
    }
};

// Функция для открытия модального окна
function openModal(serviceType) {
    const myModal = new bootstrap.Modal(document.getElementById('modal'));
    document.getElementById("serviceType").value = serviceType;
    myModal.show();
}

// Функция для закрытия модального окна
function closeModal() {
    const myModal = bootstrap.Modal.getInstance(document.getElementById('modal'));
    myModal.hide();
    document.getElementById('error-messages').innerHTML = '';
    document.getElementById('service-form').reset();
}

// Форматирование номера телефона
function formatPhoneNumber(input) {
    const cleanedInput = input.replace(/\D/g, '').substring(0, 11);

    let formattedNumber = '';
    if (cleanedInput.length > 0) formattedNumber += '+7 ';
    if (cleanedInput.length > 1) formattedNumber += '(' + cleanedInput.substring(1, 4);
    if (cleanedInput.length > 4) formattedNumber += ') ' + cleanedInput.substring(4, 7);
    if (cleanedInput.length > 7) formattedNumber += '-' + cleanedInput.substring(7, 9);
    if (cleanedInput.length > 9) formattedNumber += '-' + cleanedInput.substring(9);

    return formattedNumber;
}

function handlePhoneInput(event) {
    const input = event.target;
    input.value = formatPhoneNumber(input.value);
}

// Проверка, что дата рождения указывает возраст >= 18 лет
function isValidDateOfBirth(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    const age = today.getFullYear() - birthDate.getFullYear();
    const isBirthdayPassedThisYear = 
        today.getMonth() > birthDate.getMonth() || 
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    return age > 18 || (age === 18 && isBirthdayPassedThisYear);
}

// Функция для проверки формы
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const country = document.getElementById('country').value.trim();
    const date = document.getElementById('date').value.trim();
    const comment = document.getElementById('comment').value.trim();
    

    const errorMessages = document.getElementById('error-messages');
    errorMessages.innerHTML = '';

    const errors = [];

    // Проверки
    if (!name) errors.push('Пожалуйста, введите ваше имя.');
    if (!email) errors.push('Пожалуйста, введите ваш email.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Введите корректный e-mail.');
    if (!phone) errors.push('Пожалуйста, введите ваш номер телефона.');
    if (!/^\d+$/.test(phone.replace(/\D/g, ''))) errors.push('Поле "Телефон" должно содержать только цифры.');
    if (!country) errors.push('Пожалуйста, выберите страну.');
    if (!comment) errors.push('Пожалуйста, добавьте комментарий.');

    // Проверка даты рождения
    if (!date) {
        errors.push('Пожалуйста, укажите дату рождения.');
    } else if (!isValidDateOfBirth(date)) {
        errors.push('Вы должны быть старше 18 лет.');
    }

    // Вывод ошибок или обработка данных
    if (errors.length > 0) {
        errorMessages.innerHTML = errors.join('<br>');
        return false;
    }

    submitForm({ name, email, phone, country, date, comment });
    return false; // Предотвращаем перезагрузку страницы
}

// Сбор данных и запись в formData
function submitForm(data) {
    formData.name = data.name;
    formData.email = data.email;
    formData.phone = data.phone;
    formData.country = data.country;
    formData.date = data.date;
    formData.comment = data.comment;
    
    formData.printData(); // Вывод данных в консоль
    closeModal(); // Закрытие модального окна
    window.location.href = 'form.html';
}


document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', handlePhoneInput);
});
