document.addEventListener("DOMContentLoaded", function() {
    const timeDisplay = document.getElementById("time");
    const totalTime = 15 * 60; // 15 minutos en segundos
    let remainingTime = localStorage.getItem("remainingTime");

    if (!remainingTime) {
        remainingTime = totalTime;
        localStorage.setItem("remainingTime", remainingTime);
    } else {
        remainingTime = parseInt(remainingTime, 10);
    }

    const updateDisplay = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        timeDisplay.textContent = `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const countdown = setInterval(() => {
        if (remainingTime > 0) {
            remainingTime--;
            localStorage.setItem("remainingTime", remainingTime);
            updateDisplay(remainingTime);
        } else {
            clearInterval(countdown);
            localStorage.removeItem("remainingTime");
        }
    }, 1000);

    updateDisplay(remainingTime);
});