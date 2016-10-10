function Slideshow() {
    this.ulSlides = $('ul#slideshow').eq(0);
    this.slides = this.ulSlides.children('li');
    this.newDiv = $('<div></div>');
    this.previewItems = [];

    this.init();
    this.hideSlides();
    this.slide();  
}

Slideshow.prototype.init = function () {
    var _this = this;

    //(5.3) Init    
    var body = $('body');
    
    this.slides.each(function() {
        var prevImg = $(this).find('img').eq(0).clone();
        prevImg.attr({ 'width' : 100 , 'height' : 100 });
        var li =  $('<div class="preview"></div>');
        li.append(prevImg);
        _this.previewItems.push(li);
        _this.newDiv.append(li);
    });

    this.ulSlides.remove();
    body.prepend(this.newDiv);
    body.prepend(this.ulSlides);

};

Slideshow.prototype.slide = function () {
    var imageSrc = '';
    var currentLi = this.ulSlides.children('li:visible');
    var slides = this.slides;
    if (currentLi.length < 1) {
        this.slides.eq(0).show();
        imageSrc = this.slides.eq(0).find('img:first').attr('src');
    } else if (currentLi.next().length < 1) {
        this.slides.eq(0).show();
        imageSrc = this.slides.eq(0).find('img:first').attr('src');
        currentLi.hide();
    } else {
        currentLi.hide();
        currentLi.next().show();
        imageSrc = currentLi.next().find('img:first').attr('src');
    }

    this.menuChange(imageSrc);

};

Slideshow.prototype.menuChange = function(currentSlideSrc){    
    this.previewItems.forEach(function(element) {
        if($(element).children('img:first').attr('src') == currentSlideSrc) {
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
setInterval(function(){
    slider.slide.call(slider);
}, 1000);
