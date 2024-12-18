$(document).ready(function() {
    $('#subscribe-form').on('submit', function(e) {
        e.preventDefault();
        
        $.ajax({
            type: 'POST',
            url: '/api/subscribe',
            data: {
                email: $('#mcemail').val()
            },
            success: function(response) {
                let statusMsg = $('#subscribe-status-msg');
                statusMsg.text(response.message);
                statusMsg.css({
                    'display': 'block',
                    'color': '#4CAF50',
                    'margin': '10px 0'
                });
                $('#mcemail').val('');
            },
            error: function(xhr) {
                let statusMsg = $('#subscribe-status-msg');
                let errorMessage = xhr.status === 409 ? 'این ایمیل قبلا ثبت شده است' : 'خطا در ثبت ایمیل';
                statusMsg.text(errorMessage);
                statusMsg.css({
                    'display': 'block',
                    'color': '#f44336',
                    'margin': '10px 0'
                });
            }
        });
    });
});