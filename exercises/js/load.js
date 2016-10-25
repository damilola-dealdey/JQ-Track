function Load() {
  this.init();
}

Load.prototype.init = function (){
  this.headerListItems = $('#blog li');
  this.headerListItems.click(function (e) {
    e.stopPropagation();
    e.preventDefault();
    var href = $(this).find('a').attr('href');
    var tempArray = href.split('#');
    var id = '#' + tempArray[1];
    $(this).data('targetdiv').load('../exercises/data/blog.html ' + id);
  });

  this.headerListItems.each(function (){
    var newDiv = $('<div></div>');
    newDiv.insertAfter($(this));
    $(this).data('targetdiv', newDiv);
  });
};

new Load();