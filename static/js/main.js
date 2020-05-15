$(document).ready(function () {
    svg4everybody({});

(function(){
    $('#filterBtn').on('click',function(){
        $('.product__filter').fadeToggle();
    });

    $('.filter-clear').click(function() {
        $('input:checked').prop('checked', false);
      });

      $(document).on('click', function (e){ 
        var div = $('.product__filter');
        var filter = $('#filterBtn');
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0 && !filter.is(e.target)) { 
			div.fadeOut(); 
		}
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