var mapButton = document.querySelector(".map-button");
var writeUsModal = document.querySelector(".modal-write-us");
var writUsClose = writeUsModal.querySelector(".close");
var overlay = document.querySelector(".modal-overlay");
var writeUsSend = writeUsModal.querySelector(".modal-button");

var writeUsName = writeUsModal.querySelector(".modal-name");
var writeUsEmail = writeUsModal.querySelector(".modal-email");
var writeUsMessage = writeUsModal.querySelector(".modal-message");

mapButton.addEventListener("click", function(e){
	e.preventDefault();


	overlay.classList.add("overlay-show");
	writeUsModal.classList.add("modal-write-us-show");
	writeUsModal.classList.add("modal-write-us-opacity");

	if(localStorage.getItem("name")) {
		writeUsName.value = localStorage.getItem("name");
		writeUsEmail.focus();
	} else {
		writeUsName.focus();
	}

	if(writeUsName.classList.contains("modal-red-border")) writeUsName.classList.remove("modal-red-border");
	if(writeUsEmail.classList.contains("modal-red-border")) writeUsEmail.classList.remove("modal-red-border");
	if(writeUsMessage.classList.contains("modal-red-border")) writeUsMessage.classList.remove("modal-red-border");
});


overlay.addEventListener("click", function(e){
	e.preventDefault();

	if(overlay.classList.contains("overlay-show")) overlay.classList.remove("overlay-show");
	if(writeUsModal.classList.contains("modal-write-us-show")) writeUsModal.classList.remove("modal-write-us-show");

	if(writeUsModal.classList.contains("modal-shake")) writeUsModal.classList.remove("modal-shake");
	if(writeUsName.classList.contains("modal-red-border")) writeUsName.classList.remove("modal-red-border");
	if(writeUsEmail.classList.contains("modal-red-border")) writeUsEmail.classList.remove("modal-red-border");
	if(writeUsMessage.classList.contains("modal-red-border")) writeUsMessage.classList.remove("modal-red-border");
	if(writeUsModal.classList.add("modal-write-us-opacity")) writeUsModal.classList.remove("modal-write-us-opacity");




});

window.addEventListener("keydown", function(e){
	if(e.keyCode ===27) {
		if(overlay.classList.contains("overlay-show")) overlay.classList.remove("overlay-show");
		if(writeUsModal.classList.contains("modal-write-us-show")) writeUsModal.classList.remove("modal-write-us-show");
		if(writeUsModal.classList.contains("modal-shake")) writeUsModal.classList.remove("modal-shake");
		if(writeUsName.classList.contains("modal-red-border")) writeUsName.classList.remove("modal-red-border");
		if(writeUsEmail.classList.contains("modal-red-border")) writeUsEmail.classList.remove("modal-red-border");
		if(writeUsMessage.classList.contains("modal-red-border")) writeUsMessage.classList.remove("modal-red-border");
		if(writeUsModal.classList.add("modal-write-us-opacity")) writeUsModal.classList.remove("modal-write-us-opacity");



	}

});


writUsClose.addEventListener("click", function(e){
	e.preventDefault();

	overlay.classList.remove("overlay-show");
	writeUsModal.classList.remove("modal-write-us-show");

	if(writeUsModal.classList.contains("modal-shake")) writeUsModal.classList.remove("modal-shake");
	if(writeUsName.classList.contains("modal-red-border")) writeUsName.classList.remove("modal-red-border");
	if(writeUsEmail.classList.contains("modal-red-border")) writeUsEmail.classList.remove("modal-red-border");
	if(writeUsMessage.classList.contains("modal-red-border")) writeUsMessage.classList.remove("modal-red-border");
	if(writeUsModal.classList.add("modal-write-us-opacity")) writeUsModal.classList.remove("modal-write-us-opacity");


});


writeUsSend.addEventListener("click", function(e){
	
	if(writeUsName.classList.contains("modal-red-border")) writeUsName.classList.remove("modal-red-border");
	if(writeUsEmail.classList.contains("modal-red-border")) writeUsEmail.classList.remove("modal-red-border");
	if(writeUsMessage.classList.contains("modal-red-border")) writeUsMessage.classList.remove("modal-red-border");

	if(!writeUsName.value || !writeUsEmail.value || !writeUsMessage.value) {

		if(writeUsModal.classList.contains("modal-shake")) writeUsModal.classList.remove("modal-shake");
		writeUsModal.offsetWidth;
		writeUsModal.classList.add("modal-shake");

		if(!writeUsName.value) {
			e.preventDefault();
			writeUsName.classList.add("modal-red-border");
		}

		if(!writeUsEmail.value) {
			e.preventDefault();
			writeUsEmail.classList.add("modal-red-border");
		}


		if(!writeUsMessage.value) {
			e.preventDefault();
			writeUsMessage.classList.add("modal-red-border");
		}
	} else {
		localStorage.setItem("name", writeUsName.value);
	}



});
