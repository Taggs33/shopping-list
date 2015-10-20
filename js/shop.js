$(document).ready(function() {

	$('.add-item-button').click(function() {
		var item = $('.add-item-text').val();
		$('.add-item-text').val('');

		$('.list').append('<li class="item">' + item + '<i class="fa fa-times"></i></li>');
	});
});

// <li class="item">Bread<i class="fa fa-times"></i></li>