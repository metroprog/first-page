let paintingsList = [];
paintingsList.push(new Painting('Весна в лесу', 70, 50, 'пейзаж', 'холст, масло', 2000, ['природа', 'лес', 'весна']));
paintingsList.push(new PaintingForOrder('Нежность', 80, 60, 'портрет', 'акварель', 5000, ['девушка', 'цветы'], 'Виктор Сергеев', 2015));
paintingsList.push(new Painting('Дары осени', 100, 80, 'натюрморт', 'гуашь', 1500, ['фрукты', 'цветы']));
paintingsList.push(new PaintingForOrder('Скорость', 90, 80, 'пейзаж', 'холст, масло', 4000, ['природа', 'животные', 'лошади'], 'С. А. Савичев', 2017));
paintingsList.push(new Painting('Вдохновение', 100, 150, 'абстракция', 'гуашь', 2000, ['абстракция']));


let productsList = document.querySelector('.products-list');

for (let i = 0; i < paintingsList.length; i++) {
	let li = document.createElement('li');
	productsList.prepend(li);
	let a = document.createElement('a');
	a.className = 'product-card';
	a.href = '#';
	li.prepend(a);
	let h3 = document.createElement('h3');
	h3.innerHTML = paintingsList[i].name;
	a.prepend(h3);
	let img = document.createElement('img');
	img.width = 156;
	img.height = 120;
	img.src = 'https://picsum.photos/156/120/?' + i;
	img.alt = paintingsList[i].name;
	a.append(img);
	let pDescr = document.createElement('p');
	pDescr.className = 'product-description';
	pDescr.innerHTML = paintingsList[i].description();
	a.append(pDescr);
	let div = document.createElement('div');
	div.className = 'product-options';
	a.append(div);
	let pSize = document.createElement('p');
	pSize.className = 'size';
	pSize.innerHTML = paintingsList[i].width + '&#215;' + paintingsList[i].height + ' см';
	div.append(pSize);
	let pFrame = document.createElement('p');
	pFrame.className = 'price-frame';
	pFrame.innerHTML = 'Рама - ' + paintingsList[i].frameCalculation(70) + ' грн.';
	div.append(pFrame);
	let span = document.createElement('span');
	span.className = 'price';
	span.innerHTML = paintingsList[i].price + ' грн.';
	div.append(span);
}	

