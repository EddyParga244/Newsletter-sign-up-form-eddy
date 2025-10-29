# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Github Repository: (https://github.com/EddyParga244/Newsletter-sign-up-form-eddy)
- Github Pages: (https://eddyparga244.github.io/Newsletter-sign-up-form-eddy/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

I'm proud that I was able to make the email validation and the submit form fully functional, I'll keep these parts of the code because I believe they could be useful in the future. I was also able to complete a project using a mobile-first approach.

```js
function isValid(email) {
    const label_error = document.getElementById("label-error");
    const email_error = document.getElementById("email");
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valid = pattern.test(email);

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

//Submit form
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const emailInput = email.value.trim();

    console.log(isValid(emailInput) ? "Valid email address" : "Invalid email address");

    let validate = isValid(emailInput);

    if (validate === true) {
        success.classList.toggle("hidden");
        sign_up.classList.toggle("hidden");
        user.textContent = emailInput;
    }
});
```
### Continued development

I plan to continue developing projects using a mobile-first approach and using Javacript.

### Useful resources

- [Geeksforgeeks](https://www.geeksforgeeks.org/javascript/javascript-program-to-validate-an-email-address/) - This helped me on how to make the Javascript email validation.

## Author
Eduardo Parga Vela
Start date: 24-10-2025
End date: 29-10-2025
