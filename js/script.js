var mapButton = document.querySelector(".map-button");
var writeUsModal = document.querySelector(".modal-write-us");
var writUsClose = writeUsModal.querySelector(".close");
var overlay = document.querySelector(".modal-overlay");
var writeUsSend = writeUsModal.querySelector(".modal-button");

var writeUsName = writeUsModal.querySelector(".modal-name");
var writeUsEmail = writeUsModal.querySelector(".modal-email");
var writeUsMessage = writeUsModal.querySelector(".modal-message");

var control1 = document.querySelector("#control-1");
var control2 = document.querySelector("#control-2");
var control3 = document.querySelector("#control-3");

var slide1 = document.querySelector(".slide:nth-child(1)");
var slide2 = document.querySelector(".slide:nth-child(2)");
var slide3 = document.querySelector(".slide:nth-child(3)");

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


control1.addEventListener("click", function(){
	if(control2.classList.contains("active")) control2.classList.remove("active");
	if(control3.classList.contains("active")) control3.classList.remove("active");
	control1.classList.add("active");

	if(slide2.classList.contains("slide-show")) slide2.classList.remove("slide-show");
	if(slide3.classList.contains("slide-show")) slide3.classList.remove("slide-show");
	slide1.classList.add("slide-show");

});


control2.addEventListener("click", function(){
	if(control1.classList.contains("active")) control1.classList.remove("active");
	if(control3.classList.contains("active")) control3.classList.remove("active");
	control2.classList.add("active");

	if(slide1.classList.contains("slide-show")) slide1.classList.remove("slide-show");
	if(slide3.classList.contains("slide-show")) slide3.classList.remove("slide-show");
	slide2.classList.add("slide-show");
});


control3.addEventListener("click", function(){
	if(control1.classList.contains("active")) control1.classList.remove("active");
	if(control2.classList.contains("active")) control2.classList.remove("active");
	control3.classList.add("active");

	if(slide1.classList.contains("slide-show")) slide1.classList.remove("slide-show");
	if(slide2.classList.contains("slide-show")) slide2.classList.remove("slide-show");
	slide3.classList.add("slide-show");
});



