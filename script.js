$(document).ready(function() {

    $('.course-card').on('mouseenter', function() {
        $(this).css({
            'border': '1px solid #27ae60',
            'transform': 'translateY(-5px)',
            'box-shadow': '0 10px 20px rgba(0,0,0,0.1)'
        });
    });

    $('.course-card').on('mouseleave', function() {
        $(this).css({
            'border': '1px solid #eee',
            'transform': 'translateY(0)',
            'box-shadow': '0 4px 6px rgba(0,0,0,0.1)'
        });
    });

    $('#studentForm').on('submit', function(e) {
        var name = $('#name').val();
        var email = $('#email').val();
        var course = $('#course').val();

        if (name === "" || email === "" || course === "") {
            e.preventDefault();
            alert("Error: Please fill in all required fields.");
        } else {
            alert("Success! " + name + ", you have been enrolled in the " + course + " course.");
        }
    });

});