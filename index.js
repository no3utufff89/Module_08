const Cart = function (goods = [], totalPrice, count) {
    this.goods = goods;
    this.totalPrice = totalPrice;
    this.count = count;
}

Cart.prototype.calculateGoodsPrice = function () {
    this.goods.forEach(item => {
        this.totalPrice += item.price;
    })
}

Cart.prototype.addGoods = function (good) {
  this.goods.push(good);
  this.increaseCount();
}

Cart.prototype.getTotalPrice = function () {
    this.calculateGoodsPrice();
    return this.totalPrice;
}

Cart.prototype.increaseCount = function () {
    this.count++;
}

Cart.prototype.clear = function () {
    this.goods = [];
    this.totalPrice = 0;
    this.count = 0;
}

Cart.prototype.print = function () {
    const cartStr = JSON.stringify(this.goods);
    const cartObj = JSON.parse(cartStr)
    console.log(cartObj)
    console.log(JSON.stringify(this.goods));
    console.log(this.getTotalPrice());
}

const Goods = function (price, title, discount) {
    this.price = price;
    this.title = title;
    this.discount = discount;
}

const FoodGoods = function (price, title, discount, calories ) {
    Goods.call(this, price, title, discount);
    this.calories = calories;
}

const ClothingGoods = function (price, title, discount, material) {
    Goods.call(this, price, title, discount);
    this.material = material;
}

const TechnicsGoods = function (price, title, discount, type) {
    Goods.call(this, price, title, discount);
    this.type = type;
}

Object.setPrototypeOf(Goods.prototype, Cart.prototype);
Object.setPrototypeOf(FoodGoods.prototype, Goods.prototype);
Object.setPrototypeOf(ClothingGoods.prototype, Goods.prototype);
Object.setPrototypeOf(TechnicsGoods.prototype, Goods.prototype);

const apple = new FoodGoods(10, 'яблоко',0, 25);
const trousers = new ClothingGoods(20, 'штаны', 0, 'березовая кора');
const phone = new TechnicsGoods(30, 'телефон', 0, 'IPhone');

const cartItem = new Cart([], 0, 0);

cartItem.addGoods(apple);
cartItem.addGoods(trousers);
cartItem.addGoods(phone);

cartItem.print()

const clear = () => {
    cartItem.clear()
    console.log('Корзина очищена')
    cartItem.print()
}

setTimeout(clear,2000)




