var currentPhotoIndex = 1;
var photosCount = 5;

function showNextPhoto() {
	currentPhotoIndex++;
	if(currentPhotoIndex > photosCount) currentPhotoIndex = 1;
	var elem = document.getElementById("currentPhoto");
	elem.src = "images/photo" + currentPhotoIndex + ".jpg";
}
function addNextPhoto() {
	var countPagePhotos = document.getElementsByTagName("img").length;
	if(countPagePhotos < photosCount) {
		currentPhotoIndex++;
		if(currentPhotoIndex > photosCount) currentPhotoIndex = 1;
		var newImage = document.createElement("img");
		newImage.src = "images/photo" + currentPhotoIndex + ".jpg";
		var containerElem = document.getElementById("gallery");
		containerElem.appendChild(newImage);
	} else {
		document.getElementById("addButton").hidden = true;
	}
}
