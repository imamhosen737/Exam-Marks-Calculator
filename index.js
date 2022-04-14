var bangla = document.getElementById('bangla');
var english = document.getElementById('english');
var maths = document.getElementById('maths');
var accounting = document.getElementById('accounting');
var finance = document.getElementById('finance');
var ict = document.getElementById('ict');
var submit = document.getElementById('submit');
var input = document.querySelectorAll('.inputs');

for (var i = 0; i < input.length; i++) {
        input[i].addEventListener('input', function () {
                for (var x = 0; x<input.length; x++) {
                        if (input[x].value>100) {
                                input[x].style.background = "red";
                        } else {
                                input[x].style.background = "none";
                        }
                }
        });
}

submit.addEventListener('click', function () {
        if (
                bangla.value == '' ||
                english.value == '' ||
                maths.value == '' ||
                accounting.value == '' ||
                finance.value == '' ||
                ict.value == ''
        ) {
                alert('Input fields are required');
        }
});
