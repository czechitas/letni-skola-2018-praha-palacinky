// Image blocks as checkboxes
var suroviny = document.querySelectorAll('.surovina')
var formSuroviny = document.querySelector('#formSuroviny')

formSuroviny.addEventListener('change', function(e) {
	var data = new FormData(formSuroviny)
	var active = data.getAll('suroviny')

	// Mark all as inactive
	suroviny.forEach(function(el) {
		el.classList.remove('active')
	})
	// Mark active ones
	active.forEach(function(value) {
		var checkbox = document.querySelector('[value="' + value + '"]')
		if(checkbox) {
			checkbox.parentNode.parentNode.classList.add('active')
		}
	})
})