var setCountdown = function (date, label="") {
  var countdownId = Math.random() * 999;
	var countdownContent = 
`<h1 id="countdown_headline_${countdownId}">${label}</h1>
	  <div id="countdown_timer_${countdownId}">
		<ul>
		  <li><span id="countdown_days_${countdownId}"></span>days</li>
		  <li><span id="countdown_hours_${countdownId}"></span>Hours</li>
		  <li><span id="countdown_minutes_${countdownId}"></span>Minutes</li>
		  <li><span id="countdown_seconds_${countdownId}"></span>Seconds</li>
		</ul>
	  </div>`;

    var countdownDiv = document.getElementsByClassName("countdown")[document.getElementsByClassName("countdown").length-1];
    countdownDiv.innerHTML = countdownContent;
	
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

   let countDown = new Date(date).getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;
			if(distance<0)
				distance=0;

            document.getElementById(`countdown_days_${countdownId}`).innerText = Math.floor(distance / (day)),
            document.getElementById(`countdown_hours_${countdownId}`).innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById(`countdown_minutes_${countdownId}`).innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById(`countdown_seconds_${countdownId}`).innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          clearInterval(x);
        }
        //seconds
      }, 0)
  };