$(document).ready(function () {
    svg4everybody({});

(function(){
    $('#filterBtn').on('click',function(){
        $('.product__filter').fadeToggle();
    });
    $('.filter-btn').on('click',function(){
        $('.product__filter').fadeOut();
    });

    $('.filter-clear').click(function() {
        $('input:checked').prop('checked', false);
      });
    
}());


var clickMenu = $('.sandwich');
var sandwich = function () {
    $(document).on('click', '.sandwich', function(e) {
    e.preventDefault();
    $(this).toggleClass('sandwich--active');
    clickMenu.toggleClass('active');
    if($(this).hasClass('active')) {
        $('.menu').show(300);
    }else {
        $('.menu').hide(300);
    }

});
};
    
    sandwich();
  


   

});