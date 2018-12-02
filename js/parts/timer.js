function timer() {
	let deadline = '2018-08-23, 23:58:30';
	
	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
		seconds = Math.floor( (t/1000) % 60 ).toString(),
		minutes = Math.floor( (t/1000/60) % 60 ).toString(),
		hours = Math.floor( (t/(1000*60*60)) ).toString();

			if(hours.length <2) {
				hours = '0' + hours;
			}
			if(minutes.length <2) {
				minutes = '0' + minutes;
			}
			if(seconds.length <2) {
				seconds = '0' + seconds;
			}


		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	};

	function setClock(id, endtime) {

		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

			function updateClock() {
				let t = getTimeRemaining(endtime);
				hours.innerHTML = t.hours;
				minutes.innerHTML = t.minutes;
				seconds.innerHTML = t.seconds;

				if (t.total <= 0) {
					clearInterval(timeInterval);
					timer.textContent = "00 : 00 : 00";
				}
			};
			
			let timeInterval = setInterval(updateClock, 1000);
			updateClock();
	};

	setClock('timer', deadline);
}

export default timer;