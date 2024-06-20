$(document).ready(function() {
    // Insert filter input before icons
    $('.InputfieldIconAll').before('<div id="icons-filter" class="hidden"><input id="icons-filter-input" type="text" placeholder="Filter icons..."></div>');

    // Toggle the filter input visibility
    $('a.InputfieldIconShowAll').click(function() {
        $('#icons-filter').toggleClass('hidden');
        $('#icons-filter-input').val('');

        // Show all icons when filter input is shown
        $('.InputfieldIconAll i').parent('div').removeClass('hidden');

        // Focus on the input field
        if (!$('#icons-filter').hasClass('hidden')) {
            $('#icons-filter-input').focus();
        }
    });

    // Filter icons based on input value
    $('.InputfieldIcon').on('keyup', '#icons-filter-input', function() {
        var filterValue = $(this).val().toLowerCase();
        var $icons = $('.InputfieldIconAll i');
        $icons.each(function() {
            var title = $(this).attr('title').toLowerCase();
            if (title.indexOf(filterValue) === -1) {
                $(this).addClass('hidden');
            } else {
                $(this).removeClass('hidden');
            }
        });
    });
});
