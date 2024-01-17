const clock = document.getElementById("clock");

// setInterval(date.toLocaleTimeString(), 1);
setInterval(function () {
  let date = new Date();

  //   console.log(date.toLocaleTimeString());

  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
