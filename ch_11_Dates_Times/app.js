const clock = document.querySelector('.clock');

const tick = () => {
    const now = new Date();

    const hrs = now.getHours();
    const mins = now.getMinutes();
    const secs = now.getSeconds();

    clock.innerHTML = `
        <span>${hrs}</span> : <span>${mins}</span> : <span>${secs}</span>
    `;
};

setInterval(tick, 1000);