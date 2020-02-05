let images = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg', 'photo5.jpg'];
let currentPhotoIndex = 0;

function showNextPhoto() {
	currentPhotoIndex++;
	if(currentPhotoIndex >= images.length) {
		currentPhotoIndex = 0;
	}
	let img = document.getElementById("currentPhoto");
    img.src = "images/" + images[currentPhotoIndex];
}
function addNextPhoto() {
	let countPagePhotos = document.getElementsByTagName("img").length;
	if(countPagePhotos < images.length) {
		currentPhotoIndex++;
		if(currentPhotoIndex >= images.length) {
			currentPhotoIndex = 0;
		}
		let newImage = document.createElement("img");
		newImage.src = "images/" + images[currentPhotoIndex];
		let containerElem = document.getElementById("gallery");
		containerElem.appendChild(newImage);
	} else {
		let button = document.getElementById('addButton');
		button.innerHTML = 'End of folder';
		button.disabled = true;
	}
}
function addRandomPhoto() {
	let newImage = document.createElement("img");
	newImage.src = "https://picsum.photos/400/299/?" + Math.floor((Math.random()*100));
	let containerElem = document.getElementById("gallery");
	containerElem.appendChild(newImage);
}