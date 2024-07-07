function updateCountdownTimer() {
  const currentDate = new Date("2024-07-07T17:30:00");
  const lastWinDate = new Date("2021-12-05T20:36:15");
  const timeDifference = currentDate - lastWinDate;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  const timerElement = document.getElementById("countdown-timer");
  timerElement.innerHTML = `${days} d ${hours} h ${minutes} m ${seconds} s `;
}

updateCountdownTimer();
setInterval(updateCountdownTimer, 1000);
