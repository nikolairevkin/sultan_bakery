$(document).ready(function() {

    $('#toolbar').hide();

    $('tbody input[type="checkbox"]').click(function() {
        $('#selected-count').text($('tbody input:checked').length);
        if ($('tbody input:checked').length > 0) {
            $('#toolbar').show();
        } else {
            $('#toolbar').hide();
        }
    });

    $('thead input[type="checkbox"]').click(function() {
        if ($(this).prop('checked')) {
            $('tbody input[type="checkbox"]').prop('checked', true);
            $('#toolbar input[type="checkbox"]').prop('checked', true);
            $('#toolbar').show();
        } else {
            $('tbody input[type="checkbox"]').prop('checked', false);
            $('#toolbar input[type="checkbox"]').prop('checked', false);
            $('#toolbar').hide();
        }
        $('#selected-count').text($('tbody input:checked').length);
    });

    $('#import-start').click(function() {
        $('.step-1').show();
        $('.step-2').hide();
        $('.step-3').hide();
    });

    $('.to-step-1').click(function() {
        $('.step-1').show();
        $('.step-2').hide();
        $('.step-3').hide();
    });

    $('.to-step-2').click(function() {
        $('.step-1').hide();
        $('.step-2').show();
        $('.step-3').hide();
    });

    $('.to-step-3').click(function() {
        $('.step-1').hide();
        $('.step-2').hide();
        $('.step-3').show();
    });

    $('#composite-switch').change(function() {
        if ($(this).prop('checked')) {
            $('#composite-table').removeClass('d-none');
        } else {
            $('#composite-table').addClass('d-none');
        }
    });

    $('#production-switch').change(function() {
        if ($(this).prop('checked')) {
            $('#composite-table').removeClass('d-none');
        } else {
            $('#composite-table').addClass('d-none');
        }
    });

    // $('#add-variant').click(function() {
    //   if($('#variant-table').hasClass('d-none')) {
    //     $('#variant-table').removeClass('d-none');
    //   } else {
    //     $('#variant-table').addClass('d-none');
    //   }
    // });

    $('#all-products tbody tr').click(function(ev) {
        if (ev.target.nodeName !== 'I' && ev.target.nodeName !== 'INPUT') {
            location.href = './products.edit.html';
        }
    });

    $('#product-category').change(function() {
        if ($(this).val() === 'new') {
            $('#add-category-modal').modal('show');
        }
    });

    $('#product-supplier').change(function() {
        if ($(this).val() === 'new') {
            $('#add-supplier-modal').modal('show');
        }
    });

    $('.edit-category').click(function() {
        $('delete-btn').removeClass('d-none');
        $('#category-edit-title').html('Edit category');
    });

    $('.delete-action').click(function() {
        $('delete-btn').addClass('d-none');
        $('#category-edit-title').html('Add category');
        $('#delete-modal').modal('hide');
    });

    $('.cash-round label').click(function() {
        var cash = $(this).attr('id');
        if (cash == 'lbp') {
            $('.cash').css('display', 'none');
        }
        if (cash == 'usd') {
            $('.cash').css('display', 'block');
        }
    });

    $('.vat-round label').click(function() {
        var vat = $(this).attr('id');
        if (vat == 'yes') {
            $('.vat').css('display', 'block');
        }
        if (vat == 'no') {
            $('.vat').css('display', 'none');
        }
    });

    $("option[name='add supplier']").click(function() {
        console.log('ok');
    })

    $('select[name=supplier-name-select]').change(function() {
        if ($(this).val() == '') {
            $('#add-supplier-modal').modal();
            $(this).children('optgroup:first').children('option:first').attr('selected', true);
        }
    });

    $('select[name=category-select]').change(function() {
        if ($(this).val() == '') {
            $('#add-category-modal').modal();
            $(this).children('optgroup:first').children('option:first').attr('selected', true);
        }
    });

    var checked = $("#add-category-modal input[type=checkbox]").attr('checked');
    if (checked = 'undefined') $("#add-category-modal select[name=category-select]").attr('disabled', true);
    console.log(checked);

    $("#add-category-modal label.md-check").click(function() {
        var disabled = $("#add-category-modal select[name=category-select]").attr('disabled');
        console.log(disabled);
        if (disabled == 'disabled') {
            $("#add-category-modal select[name=category-select]").removeAttr('disabled');
        }
        // if (disabled == undefined) {
        //     $("#add-category-modal select[name=category-select]").attr('disabled', 'disabled');
        // }
    });
});