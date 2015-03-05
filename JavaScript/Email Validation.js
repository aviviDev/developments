
// Global Variables 
var $mainForm = $('form');
var $email    = $('.email');
var $dom      = $('body');

// International Email RegEx
var emailReg  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Begin Validation
$mainForm.submit(function (event) {
        // Match the input value with the RegEx we created above
    if ($email.val().match(emailReg)) {
      alert('valid');
    } else {
      alert('not valid');
    }
    event.preventDefault();
});