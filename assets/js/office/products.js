$(document).ready(function () {

  $('#toolbar').hide();

  $('tbody input[type="checkbox"]').click(function () {
    $('#selected-count').text($('tbody input:checked').length);
    if ($('tbody input:checked').length > 0) {
      $('#toolbar').show();
    } else {
      $('#toolbar').hide();
    }
  });

  $('thead input[type="checkbox"]').click(function () {
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

  $('#import-start').click(function () {
    $('.step-1').show();
    $('.step-2').hide();
    $('.step-3').hide();
  });

  $('.to-step-1').click(function () {
    $('.step-1').show();
    $('.step-2').hide();
    $('.step-3').hide();
  });

  $('.to-step-2').click(function () {
    $('.step-1').hide();
    $('.step-2').show();
    $('.step-3').hide();
  });

  $('.to-step-3').click(function () {
    $('.step-1').hide();
    $('.step-2').hide();
    $('.step-3').show();
  });

  $('#composite-switch').change(function () {
    if ($(this).prop('checked')) {
      $('#composite-table').removeClass('d-none');
    } else {
      $('#composite-table').addClass('d-none');
    }
  });

  $('#production-switch').change(function () {
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

  $('#all-products tbody tr').click(function (ev) {
    if(ev.target.nodeName !== 'I' && ev.target.nodeName !== 'INPUT') {
      location.href = './products.edit.html';
    }
  });

  $('#product-category').change(function () {
    if ($(this).val() === 'new') {
      $('#add-category-modal').modal('show');
    }
  });

  $('#product-supplier').change(function () {
    if ($(this).val() === 'new') {
      $('#add-supplier-modal').modal('show');
    }
  });

  $('.edit-category').click(function () {
    $('delete-btn').removeClass('d-none');
    $('#category-edit-title').html('Edit category');
  });

  $('.delete-action').click(function () {
    $('delete-btn').addClass('d-none');
    $('#category-edit-title').html('Add category');
    $('#delete-modal').modal('hide');
  });
});