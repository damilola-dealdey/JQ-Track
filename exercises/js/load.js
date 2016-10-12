function Load() {
  this.init();
}

Load.prototype.init = function () {
  this.headerListItems = $('#blog li');
  this.headerListItems.each(function () {
    var newDiv = $('<div></div>');
    newDiv.insertAfter($(this));
    $(this).data('targetdiv', newDiv);

    $(this).click(function (e) {
      e.stopPropagation();
      e.preventDefault();
      var fetchFrom = $(this).find('a:first').attr('href');
      var href = fetchFrom;
      var tempArray = href.split('#');
      var id = '#' + tempArray[1];
      $(this).data('targetdiv').load('../exercises/data/blog.html ' + id);
    });
  });
};

new Load();