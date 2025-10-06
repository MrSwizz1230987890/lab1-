// Отримуємо посилання на елементи форми
const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const successMessage = document.getElementById('successMessage');

// Функція для показу помилки
function showError(inputId, errorId, message) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    
    input.classList.add('error');
    error.textContent = message;
    error.classList.add('show');
}

// Функція для приховання помилки
function hideError(inputId, errorId) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    
    input.classList.remove('error');
    error.classList.remove('show');
}

// Функція для валідації email через регулярний вираз
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Функція для валідації всієї форми
function validateForm() {
    let isValid = true;

    // Приховуємо всі попередні помилки
    hideError('name', 'nameError');
    hideError('email', 'emailError');
    hideError('password', 'passwordError');
    hideError('confirmPassword', 'confirmPasswordError');

    // Перевірка поля "Ім'я" - не може бути порожнім
    if (nameInput.value.trim() === '') {
        showError('name', 'nameError', 'Поле "Ім\'я" не може бути порожнім');
        isValid = false;
    }

    // Перевірка email
    if (emailInput.value.trim() === '') {
        showError('email', 'emailError', 'Поле "Email" не може бути порожнім');
        isValid = false;
    } else if (!validateEmail(emailInput.value)) {
        showError('email', 'emailError', 'Введіть коректний email адрес');
        isValid = false;
    }

    // Перевірка пароля - мінімум 6 символів
    if (passwordInput.value.length < 6) {
        showError('password', 'passwordError', 'Пароль має бути мінімум 6 символів');
        isValid = false;
    }

    // Перевірка повтору пароля - має збігатися з основним
    if (confirmPasswordInput.value !== passwordInput.value) {
        showError('confirmPassword', 'confirmPasswordError', 'Паролі не збігаються');
        isValid = false;
    }

    return isValid;
}

// Обробник подання форми
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Зупиняємо стандартну поведінку форми

    if (validateForm()) {
        // Показуємо повідомлення про успіх
        successMessage.classList.add('show');
        
        // Очищуємо форму
        form.reset();
        
        // Приховуємо повідомлення через 5 секунд
        setTimeout(function() {
            successMessage.classList.remove('show');
        }, 5000);
    }
});

// Обробники для динамічного приховування помилок при введенні даних
nameInput.addEventListener('input', function() {
    if (this.value.trim() !== '') {
        hideError('name', 'nameError');
    }
});

emailInput.addEventListener('input', function() {
    if (validateEmail(this.value)) {
        hideError('email', 'emailError');
    }
});

passwordInput.addEventListener('input', function() {
    if (this.value.length >= 6) {
        hideError('password', 'passwordError');
    }
    // Перевіряємо повтор пароля, якщо він вже введений
    if (confirmPasswordInput.value !== '' && this.value === confirmPasswordInput.value) {
        hideError('confirmPassword', 'confirmPasswordError');
    }
});

confirmPasswordInput.addEventListener('input', function() {
    if (this.value === passwordInput.value) {
        hideError('confirmPassword', 'confirmPasswordError');
    }
});