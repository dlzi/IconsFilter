$(function() {
	$('.InputfieldIconAll').before('<div id="icons-filter" class="hidden"><input id="icons-filter-input" type="text"></div>');

	$('a.InputfieldIconShowAll').click(function() {
		$('#icons-filter').toggleClass('hidden');
		$('#icons-filter-input').val('');
	});

	$('.InputfieldIcon').on('keyup', '#icons-filter-input', function(){
		var filter_value = $(this).val();
		var $icons = $('.InputfieldIconAll i');
		$icons.parent('span').removeClass('hidden');
		if(filter_value) $icons.not('[title*=' + filter_value + ']').parent('span').addClass('hidden');
	});
});