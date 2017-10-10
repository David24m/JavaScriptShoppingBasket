var ShoppingBasket = function(discountCard) {
  this.items = [];
  this.discountCard = discountCard;
};

ShoppingBasket.prototype.add = function (item) {
  this.items.push(item);
};

ShoppingBasket.prototype.putBack = function (itemName) {
  for( var item of this.items) {
    if(item.name === itemName) {
      var index = this.items.indexOf(item);
      this.items.splice(index, 1);
    };
  };
};

ShoppingBasket.prototype.totalValue = function () {
  var total = 0;
  // var bogofItems = {}
  for(var item of this.items) {
    total += item.price;
    // if (item.bogof === true) {
    //   if (bogofItems[item] != undefined) {
    //     bogofItems[item] += 1
    //   } else {
    //     bogofItems[item] = 1
    //   }
    // }
  };
  // for (var item in bogofItems) {
  //   var toRemove = Math.floor(bogofItems[item] / 2)
  //   total -= item.price * toRemove
  // }
  return total;
};

ShoppingBasket.prototype.checkout = function () {
  var total = this.totalValue();

  if(total >= 20) {
    total -= (total * 0.1)
  };
  if(this.discountCard === true) {
    total -= (total * 0.05)
  };
  return total;
};

module.exports = ShoppingBasket;
