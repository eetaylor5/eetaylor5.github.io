window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        var lname = document.getElementById("user_lname").value;
        var fname = document.getElementById("user_fname").value;
        var email = document.getElementById("user_email").value;
        var phone = document.getElementById("user_phone").value;
        var message = document.getElementById("user_message").value;
        if (lname=="") {
            alert("Please enter a valid last name")
        } else if (fname=="") {
            alert("Please enter a valid first name")
        } else if (!(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone))) {
            alert("Please enter a valid phone number")
        } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            alert("Please enter a valid email address")
        } else if (message=="") {
            alert("Please enter a message")
        } else {
            alert('Sent!');
            emailjs.sendForm("service_ewqk11dp", document.getElementById('contact-form'))
                .then(function () {
                    alert("email sent!");
                    console.log('SUCCESS!');

                }, function (error) {
                    alert("failed");
                    console.log('FAILED...', error);
                });
        }
    });
}