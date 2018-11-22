define(['jquery'], function($) {
  $(document).on('click', '#stock-btn', function(e) {
    e.preventDefault();
    var stock = $(this).attr('value');
    $.ajax({
      url: 'button/index/ajax',
      type: 'GET',
      success: function() {
        var button = $('#stock-btn');
        if (stock > 0) {
          button.html(stock + ' available');
          button.attr('disabled', true);
          button.css({
            'background-color': 'green',
            color: 'white',
            'border-color': 'green'
          });
        } else {
          button.html('No stock available');
          button.attr('disabled', true);
          button.css({
            'background-color': 'red',
            color: 'white',
            'border-color': 'green'
          });
        }
      },
      error: function(request, error) {
        alert('Error');
      }
    });
  });
});
