function form() {
	let formAll = document.querySelectorAll('.main_form'),
		inputAll = document.querySelectorAll('.form-control');

	form[8].addEventListener('submit', function() {
		ajax(form[8], inputAll, event);
	});

	form[6].addEventListener('submit', function() {
		ajax(form[6], inputAll, event);
	});

	form[7].addEventListener('submit', function() {
		ajax(form[7], inputAll, event);
	});

	form[6].addEventListener('submit', function() {
		ajax(form[6], inputAll, event);
	});

	formAll[0].addEventListener('submit', function() {
		ajax(formAll[0], inputAll, event);
	});

	formAll[1].addEventListener('submit', function() {
		ajax(formAll[1], inputAll, event);
	});

	formAll[5].addEventListener('submit', function() {
		ajax(formAll[5], inputAll, event);
	});

	function noText(input) {
		input.onkeyup = function() {
		return this.value = this.value.replace(/\D/g, '');
		}
	}

	noText(inputAll[1]);
	noText(inputAll[3]);
	noText(inputAll[11]);
	noText(inputAll[15]);
	noText(inputAll[13]);
	noText(inputAll[5]);
	noText(inputAll[7]);
	noText(inputAll[9]);
	noText(inputAll[20]);
}

module.exports = form;