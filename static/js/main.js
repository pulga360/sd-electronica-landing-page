window.onload = function() {
    $.ajax({
        url: '/assets/prices.json',
        type: 'get',
        dataType: 'json',
        async: false,
        contentType: "application/json; charset=utf-8",
        success: function(data) {
            $.each(data, function(key, val) {
                if ($('#' + key).length) {
                    $('#' + key).html('$ ' + val);
                }
            });
        },
        statusCode: {
            404: function() {
                console.log('There was a problem with the server.  Try again soon!');
            }
        }
    });
};
