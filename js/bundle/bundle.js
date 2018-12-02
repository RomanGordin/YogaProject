"use strict";

(function () {
	function r(e, n, t) {
		function o(i, f) {
			if (!n[i]) {
				if (!e[i]) {
					var c = "function" == typeof require && require;if (!f && c) return c(i, !0);if (u) return u(i, !0);var a = new Error("Cannot find module '" + i + "'");throw a.code = "MODULE_NOT_FOUND", a;
				}var p = n[i] = { exports: {} };e[i][0].call(p.exports, function (r) {
					var n = e[i][1][r];return o(n || r);
				}, p, p.exports, r, e, n, t);
			}return n[i].exports;
		}for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
			o(t[i]);
		}return o;
	}return r;
})()({ 1: [function (require, module, exports) {
		window.addEventListener('DOMContentLoaded', function () {

			var tab = require('../parts/tab.js');
			var modal = require('../parts/modal.js');
			var ajax = require('../parts/ajax.js');
			var slider = require('../parts/slider.js');
			var calc = require('../parts/calc.js');
			var timer = require('../parts/timer.js');

			tab();
			modal();
			ajax();
			slider();
			calc();
			timer();
		});
	}, { "../parts/ajax.js": 2, "../parts/calc.js": 3, "../parts/modal.js": 4, "../parts/slider.js": 5, "../parts/tab.js": 6, "../parts/timer.js": 7 }], 2: [function (require, module, exports) {
		function ajax() {
			var massege = new Object();
			massege.loading = 'Загрузка...';
			massege.success = 'Спасибо! Скоро мы с вами свяжемся';
			massege.failure = 'Что-то пошло не так...';

			var form = document.getElementsByClassName('main-form')[0],
			    form1 = document.getElementById('form'),
			    input = form.getElementsByTagName('input'),
			    input1 = form1.getElementsByTagName('input'),
			    statusMessege = document.createElement('div');

			statusMessege.classList.add('status');

			form1.addEventListener('submit', function (event) {
				event.preventDefault();
				form1.appendChild(statusMessege);

				var request = new XMLHttpRequest();
				request.open('POST', 'server.php');

				request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

				var formData = new FormData(form);

				request.send(formData);

				request.onreadystatechange = function () {
					if (request.readyState < 4) {
						statusMessege.textContent = massege.loading;
					} else if (request.readyState === 4) {
						if (request.status == 200 && request.status < 300) {
							statusMessege.textContent = massege.success;
						} else {
							statusMessege.textContent = massege.failure;
						}
					}
				};
				for (var i = 0; i < input1.length; i++) {
					input1[i].value = '';
				}
			});

			form.addEventListener('submit', function (event) {
				event.preventDefault();
				form.appendChild(statusMessege);

				var request = new XMLHttpRequest();
				request.open('POST', 'server.php');

				request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

				var formData = new FormData(form);

				request.send(formData);

				request.onreadystatechange = function () {
					if (request.readyState < 4) {
						statusMessege.textContent = massege.loading;
					} else if (request.readyState === 4) {
						if (request.status == 200 && request.status < 300) {
							statusMessege.textContent = massege.success;
						} else {
							statusMessege.textContent = massege.failure;
						}
					}
				};
				for (var i = 0; i < input.length; i++) {
					input[i].value = '';
				}
			});
		}

		module.exports = ajax;
	}, {}], 3: [function (require, module, exports) {
		function calc() {
			var persons = document.getElementsByClassName('counter-block-input')[0],
			    restDays = document.getElementsByClassName('counter-block-input')[1],
			    place = document.getElementById('select'),
			    totalValue = document.getElementById('total'),
			    personsSum = 0,
			    daysSum = 0,
			    total = 0;

			function varibleCalc() {
				var calc = total;
				totalValue.textContent = calc * place.options[place.selectedIndex].value;
			}

			function checkCalc() {
				return restDays.value == '' || persons.value == '' || persons.value == null || restDays.value == null || personsSum == '' || daysSum == '';
			}

			persons.onkeyup = function (input) {
				return this.value = this.value.replace(/[2]/ig, '');
			};
			restDays.onkeyup = function (input) {
				return this.value = this.value.replace(/[^а-яА-Я -]/ig, '');
			};

			totalValue.textContent = 0;

			persons.addEventListener('change', function () {
				personsSum = +this.value;
				total = (daysSum + personsSum) * 4000;
				if (checkCalc()) {
					totalValue.textContent = 0;
				} else {
					varibleCalc();
				}
			});

			restDays.addEventListener('change', function () {
				daysSum = +this.value;
				total = (daysSum + personsSum) * 4000;
				if (checkCalc()) {
					totalValue.textContent = 0;
				} else {
					varibleCalc();
				}
			});

			place.addEventListener('change', function () {
				if (checkCalc()) {
					totalValue.textContent = 0;
				} else {
					varibleCalc();
				}
			});
		}
		module.exports = calc;
	}, {}], 4: [function (require, module, exports) {
		function modal() {
			var more = document.querySelector('.more'),
			    overlay = document.querySelector('.overlay'),
			    close = document.querySelector('.popup-close'),
			    descriptionBtn = document.querySelectorAll('.description-btn');

			function ShowBtn() {
				overlay.style.display = 'block';
				document.body.style.overflow = 'hidden';
			}
			function closeBtn() {
				overlay.style.display = 'none';
				document.body.style.overflow = '';
			}

			for (var i = 0; i < descriptionBtn.length; i++) {
				descriptionBtn[i].onclick = function () {
					this.classList.add('more-splash');
					ShowBtn();
				};
			}

			more.addEventListener('click', function () {
				this.classList.add('more-splash');
				ShowBtn();
			});

			close.addEventListener('click', function () {
				this.classList.remove('more-splash');
				closeBtn();
			});
		}

		module.exports = modal;
	}, {}], 5: [function (require, module, exports) {
		function slider() {
			var slideIndex = 1,
			    slides = document.getElementsByClassName('slider-item'),
			    prev = document.querySelector('.prev'),
			    next = document.querySelector('.next'),
			    dotsWrap = document.querySelector('.slider-dots'),
			    dots = document.getElementsByClassName('dot');

			showSlides(slideIndex);

			function showSlides(n) {

				if (n > slides.length) {
					slideIndex = 1;
				};
				if (n < 1) {
					slideIndex = slides.length;
				};

				for (var i = 0; i < slides.length; i++) {
					slides[i].style.display = 'none';
				}

				for (var _i = 0; _i < dots.length; _i++) {
					dots[_i].classList.remove('dot-active');
				};

				slides[slideIndex - 1].style.display = 'block';
				dots[slideIndex - 1].classList.add('dot-active');
			}

			function plusSlides(n) {
				showSlides(slideIndex += n);
			}

			function currentSlide(n) {
				showSlides(slideIndex = n);
			}

			prev.addEventListener('click', function () {
				plusSlides(-1);
			});

			next.addEventListener('click', function () {
				plusSlides(1);
			});

			dotsWrap.addEventListener('click', function (event) {
				for (var i = 0; i < dots.length + 1; i++) {
					if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
						currentSlide(i);
					}
				}
			});
		}

		module.exports = slider;
	}, {}], 6: [function (require, module, exports) {
		function tab() {
			var tab = document.getElementsByClassName('info-header-tab'),
			    tabContent = document.getElementsByClassName('info-tabcontent'),
			    info = document.getElementsByClassName('info-header')[0];

			function hideTabContent(a) {
				for (var i = a; i < tabContent.length; i++) {
					tabContent[i].classList.remove('show');
					tabContent[i].classList.add('hide');
				}
			}

			hideTabContent(1);

			function showTabContent(b) {
				if (tabContent[b].classList.contains('hide')) {
					hideTabContent(0);
					tabContent[b].classList.remove('hide');
					tabContent[b].classList.add('show');
				}
			}

			info.addEventListener('click', function (event) {
				var target = event.target;
				if (target.className == 'info-header-tab') {
					for (var i = 0; i < tab.length; i++) {
						if (target == tab[i]) {
							showTabContent(i);
							break;
						}
					}
				};
			});
		}

		module.exports = tab;
	}, {}], 7: [function (require, module, exports) {
		function timer() {
			var deadline = '09-21-2018, 23:58:30';

			function getTimeRemaining(endtime) {
				var t = Date.parse(endtime) - Date.parse(new Date()),
				    seconds = Math.floor(t / 1000 % 60).toString(),
				    minutes = Math.floor(t / 1000 / 60 % 60).toString(),
				    hours = Math.floor(t / (1000 * 60 * 60)).toString();

				if (hours.length < 2) {
					hours = '0' + hours;
				}
				if (minutes.length < 2) {
					minutes = '0' + minutes;
				}
				if (seconds.length < 2) {
					seconds = '0' + seconds;
				}

				return {
					'total': t,
					'hours': hours,
					'minutes': minutes,
					'seconds': seconds
				};
			}

			function setClock(id, endtime) {

				var timer = document.getElementById(id),
				    hours = timer.querySelector('.hours'),
				    minutes = timer.querySelector('.minutes'),
				    seconds = timer.querySelector('.seconds');

				function updateClock() {
					var t = getTimeRemaining(endtime);
					hours.innerHTML = t.hours;
					minutes.innerHTML = t.minutes;
					seconds.innerHTML = t.seconds;

					if (t.total <= 0) {
						clearInterval(timeInterval);
						timer.textContent = "00 : 00 : 00";
					}
				}

				var timeInterval = setInterval(updateClock, 1000);
				updateClock();
			}

			setClock('timer', deadline);
		}

		module.exports = timer;
	}, {}] }, {}, [1]);