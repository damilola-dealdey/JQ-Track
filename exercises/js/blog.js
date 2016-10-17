function Blog() {
  this.init();
}

Blog.prototype.init = function () {
  //(5.1) Init
  $('#blog h3').each(function () {
    $(this).click(function (e) {
      e.preventDefault();
      $('p.excerpt').slideUp();
      $(this).siblings('p.excerpt')
        .slideDown();
    });
  });
};

new Blog();