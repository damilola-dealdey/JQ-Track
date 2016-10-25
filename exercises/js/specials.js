function Specials() {
  this.init();
}

Specials.prototype.init = function () {
  var $form = $('#specials form');
  var $newDiv = $('<div></div>');
  $newDiv.insertAfter($form);

  var $select = $form.find('select');
  $select.change(function () {
    var selectedDay = $(this).find('option:selected').val();
    if (!selectedDay || selectedDay.length < 1) {
      return;
    }
    $.getJSON('../exercises/data/specials.json', function (resp) {
      $newDiv.empty();
      var $hOne = $('<h1>' + resp[selectedDay].title + '</h1>');
      var $text = $('<p>' + resp[selectedDay].text + '</p>');
      $text.css({ 'color': resp[selectedDay].color });
      $newDiv.append($hOne,$text);
    });
  });

  $form.find('input[type="submit"]').remove();

};

new Specials();