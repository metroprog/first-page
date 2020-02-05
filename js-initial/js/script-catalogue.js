let newButtonAddRandom = `
		<button onclick="insertRandomItems(100)">Add 100 products</button>
	`;
let containerElem = document.querySelector(".container");
containerElem.insertAdjacentHTML("afterbegin", newButtonAddRandom);


function insertRandomItems(quantity) {
	let productsList = document.querySelector('.products-list');
	let colors = ['orange', 'yellow', 'green', 'red', 'blue', 'black', 'white'];
	let productCardTemplate = `
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

	for (let i = 1; i <= quantity; i++) {
		productsList.insertAdjacentHTML("beforeend", productCardTemplate);
	}	

	let productCards = document.querySelectorAll('.product-card');
	let productTitles = document.querySelectorAll('h3');
	let productImages = document.querySelectorAll('img');
	let productPrices = document.querySelectorAll('.price');
	let productColors = document.querySelectorAll('.colors-list li');
	
	for (let i = 1; i <= quantity; i++) {
		if (i % 2 !== 0) {
			productCards[i].classList.add('random-item');
		}
		productTitles[i].innerHTML = 'Товар № ' + i;
		productImages[i].src = 'https://picsum.photos/156/120/?' + Math.floor((Math.random()*100));
		productImages[i].alt = 'Товар № ' + i;
		productPrices[i].innerHTML = Math.floor((Math.random()*1000)) + ' грн.';
		productColors[i].setAttribute('class', 'color-' + colors[Math.floor(Math.random() * (colors.length - 1 - 0 + 1)) + 0]); //случайное целое от min до max: Math.floor(Math.random() * (max - min + 1)) + min
	}
	let newButtonAddRandom = document.querySelector('button');
	newButtonAddRandom.hidden = true;
}



