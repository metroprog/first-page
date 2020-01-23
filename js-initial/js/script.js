var images = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg', 'photo5.jpg'];
var currentPhotoIndex = 0;

function showNextPhoto() {
	currentPhotoIndex++;
	if(currentPhotoIndex >= images.length) {
		currentPhotoIndex = 0;
	}
	var img = document.getElementById("currentPhoto");
    img.src = "images/" + images[currentPhotoIndex];
}
function addNextPhoto() {
	var countPagePhotos = document.getElementsByTagName("img").length;
	if(countPagePhotos < images.length) {
		currentPhotoIndex++;
		if(currentPhotoIndex >= images.length) {
			currentPhotoIndex = 0;
		}
		var newImage = document.createElement("img");
		newImage.src = "images/" + images[currentPhotoIndex];
		var containerElem = document.getElementById("gallery");
		containerElem.appendChild(newImage);
	} else {
		var button = document.getElementById('addButton');
		button.innerHTML = 'End';
		button.disabled = true;
	}
}
function addRandomPhoto() {
	var newImage = document.createElement("img");
	newImage.src = "https://picsum.photos/400/299/?" + Math.floor((Math.random()*100));
	var containerElem = document.getElementById("gallery");
	containerElem.appendChild(newImage);
}