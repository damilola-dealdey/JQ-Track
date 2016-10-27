function Delegate() {
  this.counter = 0;
  this.$mainContainer = $('#main-container');
  this.$addButton = $('#add-button');
  this.init();
}

Delegate.prototype.init = function () {
  var _this = this;
  this.$addButton.click(function () {
    _this.add();
  });

  $('body').on('click', 'div.attatched', function () {
    _this.hit($(this));
  });
}; 

Delegate.prototype.add = function () {
  var $newDiv = $('<div class="attatched"></div>');
  $newDiv.data('index', ++this.counter);
  $newDiv.append($('<h1>My Number is ' + this.counter + '</h1>'));

  this.$mainContainer.append(newDiv);
};

Delegate.prototype.hit = function($elem){
  var index = $elem.data('index');
  if(index == this.counter){
    $elem.remove();
    this.counter--;
    return;
  }

  $('div.attatched').filter('.active').each(function(){
    $(this).removeClass('active');
  });

  $elem.addClass('active');
};

new Delegate();
