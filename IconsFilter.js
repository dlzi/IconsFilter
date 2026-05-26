$(document).ready(function () {

    // Insert filter input before the icon grid
    $('.InputfieldIconAll').before(
        '<div id="icons-filter" class="hidden">' +
            '<input id="icons-filter-input" type="search" placeholder="Filter icons…" autocomplete="off">' +
        '</div>'
    );

    // Toggle filter when "Show All Icons" is clicked
    $('a.InputfieldIconShowAll').on('click', function () {
        const $icon   = $(this).closest('.InputfieldIcon');
        const $filter = $icon.find('#icons-filter');
        const $input  = $filter.find('#icons-filter-input');

        $filter.toggleClass('hidden');
        $input.val('');

        // Reset all icon tiles to visible
        $icon.find('.InputfieldIconAll i').removeClass('hidden');

        if (!$filter.hasClass('hidden')) {
            $input.trigger('focus');
        }
    });

    // Live filter — 'input' catches typing, paste and speech input
    // Delegated to .InputfieldIcon, scoped per field instance
    $('.InputfieldIcon').on('input', '#icons-filter-input', function () {
        const val  = this.value.toLowerCase();
        const $all = $(this).closest('.InputfieldIcon').find('.InputfieldIconAll i');

        $all.each(function () {
            const title = ($(this).attr('title') || '').toLowerCase();
            $(this).toggleClass('hidden', val.length > 0 && !title.includes(val));
        });
    });
});