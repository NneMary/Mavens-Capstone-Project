function countdownTimer() {
  const countdown = document.getElementById("countdown");
  const days = countdown.querySelector("#days");
  const hours = countdown.querySelector("#hours");
  const minutes = countdown.querySelector("#minutes");
  const seconds = countdown.querySelector("#seconds");

  const launchDate = new Date("2024-04-15T12:00:00").getTime();
  const now = new Date().getTime();
  const gap = launchDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const timeLeft = {
    days: Math.floor(gap / day),
    hours: Math.floor((gap % day) / hour),
    minutes: Math.floor((gap % hour) / minute),
    seconds: Math.floor((gap % minute) / second),
  };

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  function updateCountdown() {
    days.textContent = formatTime(timeLeft.days);
    hours.textContent = formatTime(timeLeft.hours);
    minutes.textContent = formatTime(timeLeft.minutes);
    seconds.textContent = formatTime(timeLeft.seconds);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

const viewAllBtn = document.querySelector(".view-all-btn");

viewAllBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("html, body").scrollIntoView({
    behavior: "smooth",
  });
});

document.querySelectorAll("nav ul li").forEach(function (item) {
  item.addEventListener("mouseover", function () {
    if (this.querySelector("ul.dropdown")) {
      this.querySelector("ul.dropdown").style.display = "block";
    }
  });

  item.addEventListener("mouseout", function () {
    if (this.querySelector("ul.dropdown")) {
      this.querySelector("ul.dropdown").style.display = "none";
    }
  });
});
