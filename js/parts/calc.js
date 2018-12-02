function calc() {
		let persons = document.getElementsByClassName('counter-block-input')[0],
			restDays = document.getElementsByClassName('counter-block-input')[1],
			place = document.getElementById('select'),
			totalValue = document.getElementById('total'),
			personsSum = 0,
			daysSum = 0,
			total = 0;

			function varibleCalc() {
				let calc = total;
				totalValue.textContent = calc * place.options[place.selectedIndex].value;
			}

			function checkCalc() {
				return (
				restDays.value == '' ||
				persons.value == '' ||
				persons.value == null ||
				restDays.value == null ||
				personsSum == '' ||
				daysSum == '');
			}

			persons.onkeyup = function(input) {
				return this.value = this.value.replace(/\D/g, '');
			};
			restDays.onkeyup = function(input) {
				return this.value = this.value.replace(/\D/g, '');
			};

			totalValue.textContent = 0;

			persons.addEventListener('change', function() {
				personsSum = +this.value;
				total = (daysSum + personsSum)*4000;
				if (checkCalc()) {
					totalValue.textContent = 0;
				} else {
					varibleCalc();
				}
			});

			restDays.addEventListener('change', function() {
				daysSum = +this.value;
				total = (daysSum + personsSum)*4000;
				if (checkCalc()) {
					totalValue.textContent = 0;
				} else {
					varibleCalc();
				}
			});

			place.addEventListener('change', function() {
				if (checkCalc()) {
					totalValue.textContent = 0;
				} else {
				 varibleCalc();
				}
			});
}

export default calc;