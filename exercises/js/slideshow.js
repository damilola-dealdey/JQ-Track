function Slideshow() {
  this.$ulSlides = $('ul#slideshow');
  this.slides = this.$ulSlides.find('li');
  this.previewItems = [];

  this.init();
}

Slideshow.prototype.init = function () {
  var _this = this;
  var $newDiv = $('<div></div>');
  
  //(5.3) Init
  var $body = $('body');

  this.slides.each(function () {
    var $prevImg = $(this).find('img').eq(0).clone();
    $prevImg.attr({ 'width': 100, 'height': 50 });
    var li = $('<div class="preview"></div>');
    li.append($prevImg);
    _this.previewItems.push(li);
    $newDiv.append(li);
  });

  this.$ulSlides.remove();
  $body.prepend($newDiv);
  $body.prepend(this.$ulSlides);
  this.hideSlides();
  this.slide();
};

Slideshow.prototype.slide = function () {
  var imageSrc;
  var currentLi = this.$ulSlides.children('li:visible');
  var $firstSlide = this.slides.eq(0);
  if (currentLi.length < 1) {
    $firstSlide.show();
    imageSrc = $firstSlide.find('img').attr('src');
  } else if (currentLi.next().length < 1) {
    $firstSlide.show();
    imageSrc = $firstSlide.find('img').attr('src');
    currentLi.hide();
  } else {
    currentLi.hide();
    currentLi.next().show();
    imageSrc = currentLi.next().find('img').attr('src');
  }

  this.menuChange(imageSrc);
};

Slideshow.prototype.menuChange = function (currentSlideSrc) {
  this.previewItems.forEach(function (element) {
    if ($(element).find('img').attr('src') == currentSlideSrc) {
      $(element).addClass('current-snippet');
    } else {
      $(element).removeClass('current-snippet');
    }

  }, this);
};

Slideshow.prototype.hideSlides = function () {
  this.slides.each(function () {
    $(this).hide();
  });

};


var slider = new Slideshow();
setInterval(function () {
  slider.slide.call(slider);
}, 1000);
