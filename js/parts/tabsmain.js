function tabs() {
	let timerId = setTimeout( function() {
        openModal(modal);
    }, 60000);


	let slides = document.querySelectorAll('.bab'),
		active = document.querySelectorAll('.bob');

	function hideAllTabs(a,b){
		for(let i = a; i < b.length; i++) {
			slides[i].style.display = 'none';
			active[i].classList.remove('active');
		}
	}

	hideAllTabs(1, slides);
	hideAllTabs(1, active);

	for(let i = 0; i < active.length; i ++){
		active[i].onclick = function(event) {
			let target = event.target;
			if(target == active[i]) {
				hideAllTabs(0, active);
				hideAllTabs(0, slides);
				slides[i].style.display = 'block';
				active[i].classList.add('active');
			}
		};
	}
}

module.exports = tabs;