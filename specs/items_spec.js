var assert = require ("assert");
var Item = require ("../items");

describe ("Item", function() {
  var item;

  beforeEach(function (){
    item = new Item("banana", 0.30, true);
  });

  it("has a name", function() {
    assert.strictEqual(item.name, "banana");
  });

  it("has a price", function() {
    assert.strictEqual(item.price, 0.30);
  });

  it("has is bogof", function() {
    assert.strictEqual(item.bogof, true);
  });

});
