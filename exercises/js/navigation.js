function Navigation() {
    this.init();
}

Navigation.prototype.init = function() {
    //(5.2) Init
    $('#nav li').each(function(){
        $(this).hover(
            function() {
                $(this).addClass('hover');
                $(this).children('ul')
                       .addClass('see');
            },
            function() {
                $(this).removeClass('hover');
                $(this).children('ul')
                       .removeClass('see');
            }
        )});
};

new Navigation();