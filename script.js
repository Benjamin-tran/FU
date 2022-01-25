setInterval(showTime, 1000);

function showTime() {
    console.log('chechking')

	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();

	am_pm = "AM";

	if (hour > 12) {
		hour -= 12;
		am_pm = "PM";
	}
	if (hour == 0) {
		hr = 12;
		am_pm = "AM";
	}

	hour = hour < 10 ? "" + hour : hour;
	min = min < 10 ? "0" + min : min;

	document.getElementById("hours").innerHTML = hour;
	document.getElementById("minutes").innerHTML = min;
    document.getElementById("ampm").innerHTML = am_pm;
}

showTime();


// FULL SCREEN

const fullSc = document.querySelector('.full');

fullSc.onclick = function DoFullscreen (event) {
	if (document.fullscreenElement) {
	  document.exitFullscreen()
		.then(() => console.log("Document Exited from Full screen mode"))
		.catch((err) => console.error(err))
	} else {
	  document.documentElement.requestFullscreen();
	}
}


// LIGHT MODE / DARK MODE
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);