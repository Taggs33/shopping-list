$(document).ready(function() {

	$('.add-item-button').click(function() {
		addItem();
	});

	$('#add-item-form').submit(function(event) {
		event.preventDefault();
		addItem();


	});

	// $('.remove-item-button').click(function() {
	$('.list').on('click', '.remove-item-button', function() {	
		$(this).closest('.item').remove();

	});	

	// $('.list').on('click', '.check-item-button', function() {
		// $(this).closest('.item').fadeout();

	$('.list').on('click', '.check-item-button', function() {
		$(this).closest('.item').wrap('<strike class="red">');
		$(this).closest('.item').fadeTo('slow', 0.30);

	});
});

// <li class="item">Bread<i class="fa fa-times"></i></li>
function addItem() {
	var item = $('.add-item-text').val();
	$('.add-item-text').val('');

	if (item) {

		$('.list').append('<li class="item">' + item + '<i class="fa fa-thumbs-o-up check-item-button"></i><i class="fa fa-times remove-item-button"></i></li>');
	}
	else {
		alert('NO TEXT ENTERED');
	}

}
