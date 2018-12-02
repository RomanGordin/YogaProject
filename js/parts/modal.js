function modal() {
	let more = document.querySelector('.more'),
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

	for (let i = 0; i < descriptionBtn.length; i++) {
		descriptionBtn[i].onclick = function() {
			this.classList.add('more-splash');
			ShowBtn()
		} 
	}

	more.addEventListener('click', function() {
		this.classList.add('more-splash');
		ShowBtn()
	});

	close.addEventListener('click', function() {
		this.classList.remove('more-splash');
		closeBtn()
	});
}

export default modal;