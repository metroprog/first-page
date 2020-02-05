function Painting (name, width, height, genre, technique, price, marks) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.genre = genre;
  this.technique = technique;
  this.price = price;
  this.marks = marks;
}
Painting.prototype.frameCalculation = function (baguettePrice) {
  let s = Math.floor((this.width / 100 * 2 + this.height / 100 * 2) * baguettePrice);
  return s;
}
Painting.prototype.description = function () {
  let s = 'Написана в жанре ' + this.genre + '. Техника исполнения - ' + this.technique + '. Метки: ' + this.marks.join(', ') + '.';
  return s;
}

function PaintingForOrder (name, width, height, genre, technique, price, marks, customerName, year) {
  Painting.call (this, name, width, height, genre, technique, price, marks);
  this.customerName = customerName;
  this.year = year;
}
PaintingForOrder.prototype = Object.create(Painting.prototype);
Object.defineProperty (PaintingForOrder.prototype, 'constructor', {
  value: PaintingForOrder,
  enumerable: false,
  writable: true
});
PaintingForOrder.prototype.description = function () {
  let s = 'Написана под заказ в ' + this.year +  ' году. ' + 'Жанр - ' + this.genre + '. Техника исполнения - ' + this.technique + '. Метки: ' + this.marks.join(', ') + '.';
  return s;
}
