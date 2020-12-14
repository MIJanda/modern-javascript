const correctAnswers = ['B', 'B', 'B', 'B', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 100 / correctAnswers.length;
        }
    });

    // scroll to the top
    scrollTo(0, 0);
     // display the results
    result.classList.remove('d-none');

    let output = 0;
    let progressOutput = 0;

    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        result.querySelector('.progress-bar').style.width = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 18);

});