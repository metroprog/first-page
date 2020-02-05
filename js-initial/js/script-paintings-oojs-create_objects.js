let paintingsList = [];
paintingsList.push(new Painting('Весна в лесу', 70, 50, 'пейзаж', 'холст, масло', 2000, ['природа', 'лес', 'весна']));
paintingsList.push(new PaintingForOrder('Нежность', 80, 60, 'портрет', 'акварель', 5000, ['девушка', 'цветы'], 'Виктор Сергеев', 2015));
paintingsList.push(new Painting('Дары осени', 100, 80, 'натюрморт', 'гуашь', 1500, ['фрукты', 'цветы']));
paintingsList.push(new PaintingForOrder('Скорость', 90, 80, 'пейзаж', 'холст, масло', 4000, ['природа', 'животные', 'лошади'], 'С. А. Савичев', 2017));
paintingsList.push(new Painting('Вдохновение', 100, 150, 'абстракция', 'гуашь', 2000, ['абстракция']));



let productsList = document.querySelector('.products-list');
let productCardTemplate = `
	<li>
		<a class="product-card" href="#">
			<h3></h3>
			<img width="156" height="120">
			<p class="product-description">
			<div class="product-options">
				<p class='size'></p>
				<p class='price-frame'></p>
				<span class="price"></span>
			</div>
		</a>
	</li>
`;

for (let i = 0; i < paintingsList.length; i++) {
	productsList.insertAdjacentHTML("beforeend", productCardTemplate);
}	

let productCards = document.querySelectorAll('.product-card');
let productTitles = document.querySelectorAll('h3');
let productImages = document.querySelectorAll('img');
let productDescriptions = document.querySelectorAll('.product-description');
let productSizes = document.querySelectorAll('.size');
let productFramePrices = document.querySelectorAll('.price-frame');
let productPrices = document.querySelectorAll('.price');

for (let i = 0; i < paintingsList.length; i++) {
	productTitles[i].innerHTML = paintingsList[i].name;
	productImages[i].src = 'https://picsum.photos/156/120/?' + Math.floor((Math.random()*100));
	productImages[i].alt = paintingsList[i].name;
	productDescriptions[i].innerHTML = paintingsList[i].description();
	productSizes[i].innerHTML = paintingsList[i].width + '&#215;' + paintingsList[i].height + ' см';
	productFramePrices[i].innerHTML = 'Рама - ' + paintingsList[i].frameCalculation(70) + ' грн.';    // 70 - цена 1 м багета
	productPrices[i].innerHTML = paintingsList[i].price + ' грн.';
}

