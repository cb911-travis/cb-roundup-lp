(() => {

  const date = {};

  // day of the event
  date.event = new Date("Sep 27, 2018 13:00:00").getTime();

  // update the count down every second
  const update = setInterval(() => {

    // todays date and time
    date.now = new Date().getTime();

    // time left between now and the count down date
    const time_left = date.event - date.now;

    // calculations for days, hours, minutes and seconds
    const days = Math.floor(time_left / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time_left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time_left % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time_left % (1000 * 60)) / 1000);

    // output the result
    document.getElementById("countdown").innerHTML = `
      <div class="time-wrapper">
        <div class="time days">${days}</div>
        <div class="label">Days</div>
      </div>
      <div class="time-wrapper">
        <div class="time hours">${hours}</div>
        <div class="label">Hours</div>
      </div>
      <div class="time-wrapper">
        <div class="time minutes">${minutes}</div>
        <div class="label">Minutes</div>
      </div>
      <div class="time-wrapper">
        <div class="time seconds">${seconds}</div>
        <div class="label">Seconds</div>
      </div>
    `;

    // if the count down is over, display message
    if (time_left < 0) {
      clearInterval(update);
      document.getElementById("countdown").innerHTML = "EVENT OVER";
    }
  }, 1000);

})();
