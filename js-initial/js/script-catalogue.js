function insertRandomItems(quantity) {
	var productsList = document.querySelector('.products-list');
	var colors = ['orange', 'yellow', 'green'];
	for (var i = 1; i <= quantity; i++) {
		var randomImageURL = 'https://picsum.photos/156/120/?' + Math.floor((Math.random()*100));
		var productCard = `
			<li>
				<a class="product-card" href="#">
					<h3>Товар дня</h3>
					<img src="` + randomImageURL + `" width="156" height="120" alt="Товар дня">
					<div class="product-options">
						<span class="price">1000 грн.</span>
						<ul class="colors-list">
							<li class="color-red"></li>
						</ul>
					</div>
				</a>
			</li>
		`;
		productsList.insertAdjacentHTML("beforeend", productCard);
	}	
}
insertRandomItems(100);