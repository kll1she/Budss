// Бургер меню
document.addEventListener("DOMContentLoaded", function() {
    const burger = document.getElementById("burger");
    const menu = document.getElementById("menu");
    const menuClose = document.getElementById("menu_close");

    burger.addEventListener("click", function() {
        menu.classList.toggle("active");
        burger.classList.toggle("active");
    });

    menuClose.addEventListener("click", function() {
        menu.classList.remove("active");
        burger.classList.remove("active");
    });
});

// Включение и отключение модального окна
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector(".modal");
    const modalUnder = document.querySelector(".modal_under");
    const openButtons = document.querySelectorAll("#contact_button");
    const closeButton = document.querySelector(".modal_close");

    openButtons.forEach(button => {
        button.addEventListener("click", () => {
            modal.classList.add("active");
            modalUnder.classList.add("active");
        });
    });

    closeButton.addEventListener("click", () => {
        modal.classList.remove("active");
        modalUnder.classList.remove("active");
    });

    modalUnder.addEventListener("click", () => {
        modal.classList.remove("active");
        modalUnder.classList.remove("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector(".modal");
    const successModal = document.querySelector(".success_modal");
    const form = document.getElementById("modal_form");
    const successCloseButtons = document.querySelectorAll("#success_close, .success_button");
    const modalUnder = document.querySelector(".modal_under");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        modal.classList.remove("active");
        successModal.classList.add("active");

        successCloseButtons.forEach(button => {
            button.addEventListener("click", () => {
                successModal.classList.remove("active");
                modalUnder.classList.remove("active");
            });
        });
    });
});


// Валидация формы
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("modal_form");
    const inputs = form.querySelectorAll(".modal_input");
    const submitButton = form.querySelector(".modal_button");
    const errorMessages = form.querySelectorAll(".error_message");
    const formErrorMessage = form.querySelector(".form_error_message");

    function checkFormValidity() {
        let isFormValid = true;
        inputs.forEach(input => {
            if (input.value.trim() === "" && input.hasAttribute("required")) {
                isFormValid = false;
            }
        });
        submitButton.disabled = !isFormValid;
    }

    function validateInput(input) {
        const errorMessage = input.nextElementSibling;
        if (input.hasAttribute("required") && input.value.trim() === "") {
            input.classList.add("error");
            errorMessage.textContent = "This field is required.";
            errorMessage.style.display = "block";
            return false;
        } else {
            input.classList.remove("error");
            errorMessage.textContent = "";
            errorMessage.style.display = "none";
            return true;
        }
    }

    function validatePhone(input) {
        const value = input.value.replace(/\D/g, ''); // Убираем все символы, кроме цифр
        if (value.length < 11) {
            input.classList.add("error");
            input.nextElementSibling.textContent = "Phone number is invalid.";
            input.nextElementSibling.style.display = "block";
        } else {
            const formatted = '+7 (' + value.slice(1, 4) + ') ' + value.slice(4, 7) + '-' + value.slice(7, 9) + '-' + value.slice(9, 11);
            input.value = formatted;
            input.classList.remove("error");
            input.nextElementSibling.textContent = "";
            input.nextElementSibling.style.display = "none";
        }
    }

    inputs.forEach(input => {
        input.addEventListener("input", function () {
            checkFormValidity();
            validateInput(input);
            if (input.id === "modal_phone") {
                validatePhone(input);
            }
        });
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let allValid = true;

        inputs.forEach(input => {
            if (!validateInput(input)) {
                allValid = false;
            }
            if (input.id === "modal_phone") {
                validatePhone(input);
            }
        });

        if (!allValid) {
            formErrorMessage.textContent = "Please fill in all required fields correctly.";
            formErrorMessage.style.display = "block";
        } else {
            formErrorMessage.style.display = "none";
            alert("Form submitted successfully!");
        }
    });
});

// Кукис
const banner = document.querySelector('.cookie_banner');
const cookieButtons = document.querySelectorAll(".cookie_button");
const closeCookieButton = document.querySelector(".cookie_close");

cookieButtons.forEach(button => {
    button.addEventListener("click", () => {
        banner.classList.remove("active");
    });
});

closeCookieButton.addEventListener("click", () => {
    banner.classList.remove("active");
});

window.onload = function() {
    if (!localStorage.getItem('cookiesAccepted')) {
        banner.classList.add('active');
    }
};