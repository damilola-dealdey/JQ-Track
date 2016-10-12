function Specials() {
  this.init();
}

Specials.prototype.init = function () {
  this.form = $('#specials form');
  this.newDiv = $('<div></div>');
  this.newDiv.insertAfter(this.form);
  var _this = this;

  var select = this.form.find('select');

  select.change(function () {
    var selected = $(this).find('option:selected').val();
    if (!selected || selected.length < 1) {
      return;
    }
    $.getJSON('../exercises/data/specials.json', function (resp) {
      _this.newDiv.empty();
      var hOne = $('<h1>' + resp[selected].title + '</h1>');
      var text = $('<p>' + resp[selected].text + '</p>');
      text.css({ 'color': resp[selected].color });
      _this.newDiv.append(hOne);
      _this.newDiv.append(text);
    });
  });

  this.form.find('input[type="submit"]').remove();

};

new Specials();