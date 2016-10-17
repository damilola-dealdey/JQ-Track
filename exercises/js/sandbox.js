function Sandbox() { }

//(2.1) Selecting
Sandbox.prototype.fetchDivs = function () {
  return $('div.module');
};

Sandbox.prototype.getThirdItem = function () {
  //(1)
  var thirdItem = $('li#myListItem');

  //(2)
  thirdItem = $('#myList li').eq(2);

  //(3)
  thirdItem = $('#myListItem');

  return thirdItem;

  //Which is the best to use ?
  //The first is the best to use , because it is specific
};

Sandbox.prototype.selectLabel = function () {
  return $('label[for="q"]');
};

Sandbox.prototype.countHidden = function () {
  return $(':hidden').length;
};

Sandbox.prototype.countImages = function () {
  return $('img[alt]').length;
};

Sandbox.prototype.oddRows = function () {
  return $('tbody tr:odd');
};

//(2.2) Traversing
Sandbox.prototype.logImageAttributes = function () {
  var $imgs = $('img');

  for (var i = 0; i < $imgs.length; i++) {
    console.log($($imgs[i]).attr('alt'));
  }
};

Sandbox.prototype.selectSearchInput = function () {
  return $('input[name="q"]');
};

Sandbox.prototype.travUpandAddClassToForm = function () {
  this.selectSearchInput()
    .parent()
    .addClass('new-class');
};

Sandbox.prototype.selectElementWithClassCurrent = function () {
  return $('ul#myList li.current');
};

Sandbox.prototype.manipulateLiWithClassCurrent = function () {
  var elem = this.selectElementWithClassCurrent();
  elem.removeClass('current');
  elem.next().addClass('current');
};

Sandbox.prototype.selectSpecialsSelect = function () {
  return $('div#specials select');
};

Sandbox.prototype.traverseToButton = function () {
  return this.selectSpecialsSelect().parent().next().children()[0];
};

Sandbox.prototype.manipulateSlideShowElement = function () {
  var $firstElem = $('ul#slideshow li').eq(0);
  $firstElem.addClass('current');
  var $siblings = $firstElem.siblings();

  $($siblings).addClass('disabled');
};


//(2.3) Manipulating
Sandbox.prototype.addFiveItems = function () {
  var $appendee = $();
  for (var i = 0; i < 5; i++) {
    $appendee = $appendee.add('<li>Item Added : ' + (i + 1) + '</li>');
  }
  $('ul#myList').append($appendee);
};

Sandbox.prototype.removeOddItems = function () {
  $('ul#myList li:odd').remove();
};

Sandbox.prototype.addItemsToTheDivModule = function () {
  $('div.module')
    .last()
    .append(($('<h2 />').text('This is a new Header')), ($('<p />').text('This is a new paragraph')));
};

Sandbox.prototype.addAnotherOption = function () {
  ($('<option />').val('Wednesday').text('Wednesday')).insertAfter($('option[value="tuesday"]'));
};

Sandbox.prototype.addAnotherDivModule = function () {
  $('<div class="module"></div>').append($('img').eq(0)).insertAfter($('div.module').last());
};



$(function () {
  var sandBox = new Sandbox();
  sandBox.addAnotherDivModule();
  //console.log(sandBox.addItemsToTheDivModule());
});