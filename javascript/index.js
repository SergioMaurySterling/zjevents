import { clearInterval } from 'timers'

const startTimer = () => {
  const countdownDate = new Date('Nov 30, 2021 00:00:00').getTime()
  interval = setInterval(() => {
    const now = new Date().getTime()
    const distance = countdownDate - now

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    if (distance < 0) {
      // stop our timer
      clearInterval(interval.current)
    } else {
      // update timer
      setTimerDays(days)
      setTimerHours(hours)
      setTimerMinutes(minutes)
      setTimerSeconds(seconds)
    }
  }, 1000)
}

function burgerMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}