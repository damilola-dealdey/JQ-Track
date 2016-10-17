function InputHint() {
  this.init(); 
}

//(4.1) Create an Input Hint
InputHint.prototype.init = function () {
  //Init
  var $searchInput = $('input[name="q"]').eq(0);
  var $searchLabel = $('label[for="q"]').eq(0);
  var hintText = $searchLabel.text();

  //Step 1 & 2
  $searchInput.val(hintText)
    .addClass('hint');
    
  //Step 3
  $searchLabel.remove();

  //Step 4
  $searchInput.focus(function () {
    $(this).val('');
    $(this).removeClass('hint');
  });

  //Step 5
  $searchInput.blur(function () {
    if (!this.value || this.value.trim().length < 1) {
      $(this).val(hintText);
      $(this).addClass('hint');
    }
  });
};

new InputHint();