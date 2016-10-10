function Blog() {
    this.init();
}

Blog.prototype.init = function () {
    //(5.1) Init
    $('#blog ul li h3').each(function() {
        $(this).click(function(e) {
            e.preventDefault();
            $(this).siblings('p.excerpt')
                    .slideDown();
            $(this).parent()
                    .siblings()
                    .children('p')
                    .slideUp();
        });
    });    
};

new Blog();