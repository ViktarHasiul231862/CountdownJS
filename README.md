Include needed files (once per html). It can also be in "head" tag, doesn't really matter. But it should be included before executing JS "setCountdown" function:

    <link rel="stylesheet" href="countdown.css" />
    <script src="countdown.js"></script>

Create div with class "countdown" and execute "setCountdown" function with any date.

    <div class="countdown"></div>
    <script>
    	setCountdown("Jun 07, 2021 22:20:00")
    </script>

Date should be in this exact format or any other, which can be used by JS Date class. 
For UTC date append "UTC" to date string. Example: "Jun 07, 2021 22:20:00 UTC". Because by default its assumed that date is local.
