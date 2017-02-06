

function renderIndicators(){
	//store the references outside the event handler!
	var $window = $(window);

	function checkWidth() {

		var windowsize = $window.width();

		if (windowsize > 530) {
			smallWidth = false;
		}
		else {
			smallWidth = true;
		}
		console.log("resized!");
	}
	// Execute on load
	checkWidth();
	// Bind event listener
	$(window).resize(checkWidth);
}





function setValue(valueName, value) {
	window.localStorage.setItem(name, parseInt(value));
}

function getValue(valueName) {
	return parseInt(window.localStorage.getItem(valueName));
}