function ajax() {
	let massege = new Object();
	massege.loading = 'Загрузка...';
	massege.success = 'Спасибо! Скоро мы с вами свяжемся';
	massege.failure = 'Что-то пошло не так...';

	let form = document.getElementsByClassName('main-form')[0],
		form1 = document.getElementById('form'),
		input = form.getElementsByTagName('input'),
		input1 = form1.getElementsByTagName('input'),
		statusMessege = document.createElement('div');
		
		statusMessege.classList.add('status');

		form1.addEventListener('submit', function(event) {
			event.preventDefault();
			form1.appendChild(statusMessege);

			let request = new XMLHttpRequest();
			request.open('POST', 'server.php')

			request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

			let formData = new FormData(form);

			request.send(formData);

			request.onreadystatechange = function() {
				if (request.readyState < 4) {
					statusMessege.textContent = massege.loading;
				} else if (request.readyState === 4) {
					if (request.status == 200 && request.status < 300) {
						statusMessege.textContent = massege.success;
					}
					else {
						statusMessege.textContent = massege.failure;
					}
				}
			}
			for(let i = 0; i < input1.length; i++) {
				input1[i].value = '';
			}
	});

		form.addEventListener('submit', function(event) {
			event.preventDefault();
			form.appendChild(statusMessege);

			let request = new XMLHttpRequest();
			request.open('POST', 'server.php')

			request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

			let formData = new FormData(form);

			request.send(formData);

			request.onreadystatechange = function() {
				if (request.readyState < 4) {
					statusMessege.textContent = massege.loading;
				} else if (request.readyState === 4) {
					if (request.status == 200 && request.status < 300) {
						statusMessege.textContent = massege.success;
					}
					else {
						statusMessege.textContent = massege.failure;
					}
				}
			}
			for(let i = 0; i < input.length; i++) {
				input[i].value = '';
			}
	});
}

export default ajax;