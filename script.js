const form = document.getElementById("form");
const email = document.getElementById("email");
const success = document.getElementById("success");
const dismiss = document.getElementById("dismiss");
const sign_up = document.getElementById("sign-up");
const user = document.getElementById("user");
const label_error = document.getElementById("label-error");
const email_error = document.getElementById("email");
const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validate email
function isValid(userEmail) {
    const valid = pattern.test(userEmail);

    if (valid) {
        label_error.classList.add("hidden");
        email_error.classList.remove("input-error");
        return true
    } else {
        label_error.classList.remove("hidden");
        email_error.classList.add("input-error");
        return false
    }
}

//Live email validation
email.addEventListener('input', function () {
    const email = this.value;
    isValid(email);
});

//Submit form
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const emailInput = email.value.trim();

    console.log(isValid(emailInput) ? "Valid email address" : "Invalid email address");

    const validate = isValid(emailInput);

    if (validate === true) {
        success.classList.toggle("hidden");
        sign_up.classList.toggle("hidden");
        user.textContent = emailInput;
    }
});

//Dismiss validation message
dismiss.addEventListener('click', function () {
    success.classList.toggle("hidden");
    sign_up.classList.toggle("hidden");
});