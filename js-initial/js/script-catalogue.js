var newButtonAddRandom = `
		<button onclick="insertRandomItems(100)">Add 100 products</button>
	`;
var containerElem = document.querySelector(".container");
containerElem.insertAdjacentHTML("afterbegin", newButtonAddRandom);


function insertRandomItems(quantity) {
	var productsList = document.querySelector('.products-list');
	var colors = ['orange', 'yellow', 'green', 'red', 'blue', 'black', 'white'];

	var productCard = `
		<li>
			<a class="product-card" href="#">
				<h3></h3>
				<img width="156" height="120">
				<div class="product-options">
					<span class="price"></span>
					<ul class="colors-list">
						<li></li>
					</ul>
				</div>
			</a>
		</li>
	`;

	for (var i = 1; i <= quantity; i++) {
		productsList.insertAdjacentHTML("beforeend", productCard);
	}	

	var productTitles = document.querySelectorAll('h3');
	var productImages = document.querySelectorAll('img');
	var productPrices = document.querySelectorAll('.price');
	var productColors = document.querySelectorAll('.colors-list li');
	
	for (var i = 1; i <= quantity; i++) {
	productTitles[i].innerHTML = 'Новый товар';
	productImages[i].src = 'https://picsum.photos/156/120/?' + Math.floor((Math.random()*100));
	productImages[i].alt = 'Новый товар';
	productPrices[i].innerHTML = Math.floor((Math.random()*1000)) + ' грн.';
	productColors[i].setAttribute('class', 'color-' + colors[Math.floor(Math.random() * (colors.length - 1 - 0 + 1)) + 0]); //случайное целое от min до max: Math.floor(Math.random() * (max - min + 1)) + min
	}
}



