Include needed files (once per html). It can be in "head" tag:

    <link rel="stylesheet" href="countdown.css" />
    <script src="countdown.js"></script>

Create div and call "setCountdown" function with time.

    <div class="countdown"></div>
    <script>
    	setCountdown("Jun 07, 2021 22:20:00", "TEXT ABOVE COUNTER")
    </script>

Time should be in this exact format. For UTC time append "UTC" to time string. Example: "Jun 07, 2021 22:20:00 UTC"