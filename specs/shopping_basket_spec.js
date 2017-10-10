var assert = require ("assert");
var ShoppingBasket = require ("../shoppingbasket");
var Item = require ("../items");

describe ("Shopping Basket", function() {
  var shoppingBasket1;
  var shoppingBasket2;
  var item1;
  var item2;
  var item3;

  beforeEach(function() {
    shoppingBasket1 = new ShoppingBasket(false);
    shoppingBasket2 = new ShoppingBasket(true);
    item1 = new Item("salami", 1.80, false);
    item2 = new Item("halloumi", 2.30, true);
    item3 = new Item("whisky", 45, false);
  });

  it("starts empty", function() {
    assert.strictEqual(shoppingBasket1.items.length, 0);
  });

  it("can get an item", function() {
    shoppingBasket1.add(item1);
    assert.strictEqual(shoppingBasket1.items.length, 1);
  });

  it("can get more than one item", function() {
    shoppingBasket1.add(item1);
    shoppingBasket1.add(item2);
    assert.strictEqual(shoppingBasket1.items.length, 2);
  });

  it("can put item back to shelf", function() {
    shoppingBasket1.add(item1);
    shoppingBasket1.add(item2);
    shoppingBasket1.putBack(item1.name);
    assert.strictEqual(shoppingBasket1.items.length, 1);
  });

  it("can total up it's value", function() {
    shoppingBasket1.add(item1);
    shoppingBasket1.add(item2);
    assert.strictEqual(shoppingBasket1.checkout(), 4.10);
  });

  it("can take 10% off basket total", function() {
    shoppingBasket1.add(item1);
    shoppingBasket1.add(item2);
    shoppingBasket1.add(item3);
    assert.strictEqual(shoppingBasket1.checkout(), 49.1 - 4.91);
  });

  it("can take extra 5% off if it has a discountCard", function() {
    shoppingBasket2.add(item1);
    shoppingBasket2.add(item2);
    shoppingBasket2.add(item3);
    assert.equal(shoppingBasket2.checkout().toFixed(2), 41.98 );
  });

  // it("can take advantage of bogof", function() {
  //   shoppingBasket1.add(item1);
  //   shoppingBasket1.add(item2);
  //   shoppingBasket1.add(item2);
  //   assert.strictEqual(shoppingBasket1.checkout(), 4.10);
  // })

});
