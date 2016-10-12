function Tabs() {
  this.init();
}

Tabs.prototype.init = function () {
  //Init
  var modules = $('div.module');

  //Step 1
  modules.each(function () {
    $(this).hide();
  });

  //Step 2
  var ul = $('<ul></ul>');
  ul.insertBefore(modules.eq(0));

  //Step 3 & 4
  modules.each(function () {
    var div = $(this);
    var li = $('<li>' + div.children('h2').text() + '</li>');
    li.click(function () {
      div.show();
      div.addClass('current');
      div.siblings('div.module')
        .each(function () {
          $(this).removeClass('current');
          $(this).hide();
        });
    });
    ul.append(li);
  });

  //Step 5
  ul.children('li')
    .eq(0)
    .trigger('click');

};

new Tabs();