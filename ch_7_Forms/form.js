const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {
    e.preventDefault();
    // basic form validation
    const username = form.username.value;
    const usernamePattern = /^[a-zA-Z]{6,12}$/

    if (usernamePattern.test(username)) {
        feedback.classList.add('success');
        feedback.textContent = "The username is valid";
    } else {
        feedback.classList.add('error');
        feedback.textContent = "The username should be alphabetic letters and between 6 to 12 characters long";
    }

});