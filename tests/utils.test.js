const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================

it("should return area of rectangle", function () {
  const area = utils.area(3, 4)
  expect(area).to.be.a("number")
  expect(area).to.equal(12)
})

// stretch challenge for a negative
it("should return null if width or height is negative", function () {
  const area = utils.area(-3, 4);
  expect(area).to.be.null;
});

it("should return perimeter of rectangle", function () {
  const perimeter = utils.perimeter(5, 7)
  expect(perimeter).to.be.a("number")
  expect(perimeter).to.equal(24)
})

// stretch challenge for a negative
it("should return null if width or height is negative for perimeter", function () {
  const perimeter = utils.perimeter(-1, 4);
  expect(perimeter).to.be.null;
});

it("should return area of a cicrcle", function () {
  const area = utils.circleArea(3)
  expect(area).to.be.a("number")
  expect(area).to.equal(Math.PI * (3 ** 2))
})

// stretch challenge for a negative
it("should return null if radius is negative for area of circle", function () {
  const area = utils.circleArea(-2);
  expect(area).to.be.null;
});


// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function() {
  const shoppingCart = [
    { "name": "oats", "price": 6.99, "quantity": 1 },
    { "name": "strawberry", "price": 4.59, "quantity": 1 }
  ];
  const cartArray = utils.getShoppingCart(shoppingCart);
  expect(cartArray).to.be.a("array");
  expect(cartArray.length).to.equal(2);
  expect(cartArray[0]).to.have.property("name", "oats");
  expect(cartArray[1]).to.have.property("price", 4.59);
});

it("Should add a new item to the shopping cart", function() {
  const shoppingCart = [];
  const item = utils.createItem("apple", 0.99);
  utils.addItemToCart(item, shoppingCart);
  expect(shoppingCart.length).to.equal(1);
  expect(shoppingCart).to.deep.include(item);
});

it("Should return the number of items in the cart", function() {
  const shoppingCart = [
    { "name": "oats", "price": 6.99, "quantity": 1 },
    { "name": "strawberry", "price": 4.59, "quantity": 1 }
  ];
  const cartTotal = utils.getNumItemsInCart(shoppingCart);
  expect(cartTotal).to.equal(2);
});

it("Should remove items from cart", function () {
  const apple = utils.createItem("apple", 0.99);
  const shoppingCart = [{ "name": "oats", "price": 6.99, "quantity": 1 }, { "name": "strawberry", "price": 4.59, "quantity": 1 }, { "name": "apple", "price": 0.99, "quantity": 1 },];
  expect(shoppingCart.length).to.equal(3);
  expect(shoppingCart).to.deep.include(apple);
  utils.removeItemFromCart(apple, shoppingCart);
  expect(shoppingCart.length).to.equal(2);
  expect(shoppingCart).to.not.include(apple);
});


// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart", function() {
  const item1 = utils.createItem("apple", 0.99);
  const item2 = utils.createItem("banana", 1.25);
  const shoppingCart = [];

  utils.addItemToCart(item1, shoppingCart);
  expect(shoppingCart.length).to.equal(1);
  expect(utils.getNumItemsInCart(shoppingCart)).to.equal(1);

  utils.addItemToCart(item2, shoppingCart);
  expect(shoppingCart.length).to.equal(2);
  expect(utils.getNumItemsInCart(shoppingCart)).to.equal(2);

  utils.removeItemFromCart(item1, shoppingCart);
  expect(shoppingCart.length).to.equal(1);
  expect(utils.getNumItemsInCart(shoppingCart)).to.equal(1);
});


it("Should validate that an empty cart has 0 items", function() {
  const shoppingCart = [];
  const cartTotal = utils.getNumItemsInCart(shoppingCart);
  expect(cartTotal).to.equal(0);
});

it("Should return the total cost of all items in the cart", function () {
  const shoppingCart = [
    { "name": "oats", "price": 6.99, "quantity": 2 },
    { "name": "strawberry", "price": 4.59, "quantity": 1 }
  ];
  const cartTotal = utils.totalCartCost(shoppingCart);
  expect(cartTotal).to.equal(18.57);
});
