function ProductGrid() {
  this.products = [];
  this.productsDivs = [];
  this.init();
}

ProductGrid.prototype.init = function () {
  var _this = this;
  this.mainContainer = $('#mainContent');
  this.productBox = $('.product-grid');
  $('input[type="checkbox"]').each(function () {
    $(this).change(function () {
      _this.runSearch();
    });
  });


  $.getJSON('http://dl.dropbox.com/u/628209/exercises/javascript/product.json', function (resp) {
    _this.products = resp;
    _this.makePage(resp);
  });
};

ProductGrid.prototype.makePage = function (json) {
  var _this = this;
  json.forEach(function (product) {
    var newDiv = $('<div class="product-box"><img src="images/' + product.url + '" /><hr /></div>');
    var subDiv = $('<div><div>');
    subDiv.append('<p>Name : <span>' + product.name + '</span></p>');
    subDiv.append('<p>Brand : <span>' + product.brand + '</span></p>');
    subDiv.append('<p>Color : <span>' + product.color + '</span></p>');
    var available = 'In Stock';
    if (parseInt(product.sold_out) > 0) {
      available = 'Sold Out';
    }
    subDiv.append('<p>Status : <span>' + available + '</span></p>');
    newDiv.data('brand', product.brand);
    newDiv.data('color', product.color);
    newDiv.data('status', product.sold_out);
    newDiv.append(subDiv);
    _this.productsDivs.push(newDiv);
    _this.productBox.append(newDiv);
  }, this);
};

ProductGrid.prototype.runSearch = function () {
  var options = $('input[type="checkbox"]');
  var allProducts = $(options.filter('.brand-all').eq(0)).attr('checked');
  var colorsboxes = options.filter('.color').filter(':checked');
  var onlyAvailable = options.filter('.avail').eq(0).attr('checked');
  var selectedBrands = options.filter('.brand').filter(':checked');

  this.productsDivs.forEach(function (element) {
    element.hide();
  }, this);

  if (!allProducts && selectedBrands.length > 0) {
    var brands = [];

    selectedBrands.each(function () {
      brands.push(this.value);
    });

    this.productsDivs.forEach(function (element) {
      var thisBrand = element.data('brand');
      if (brands.indexOf(thisBrand) > -1) {
        element.show();
      }
    }, this);

  } else {

    this.productsDivs.forEach(function (element) {
      element.show();
    }, this);

  }

  if (colorsboxes.length > 0) {
    var colors = [];

    colorsboxes.each(function () {
      colors.push(this.value);
    });

    this.productsDivs.forEach(function (element) {
      var thiscolor = element.data('color');
      if (element.is(":visible") && colors.indexOf(thiscolor) > -1) {
        element.show();
      } else {
        element.hide();
      }
    }, this);
  }


  if (onlyAvailable) {
    this.productsDivs.forEach(function (element) {
      var thisstatus = element.data('status');
      if (element.is(":visible") && thisstatus == 0) {
        element.show();
      } else {
        element.hide();
      }
    }, this);
  }

};

var pg = new ProductGrid();