//Task 1

var submit = document.querySelector('.submit_str');
submit.addEventListener('click', function (e) {
    var form = document.forms.str_form;
    var input = form.str.value;
    var elem = document.querySelector('.elem');
    var words = document.querySelector('.words');
    elem.innerHTML = input.length;
    words.innerHTML = input.split(' ').length;
    e.preventDefault();
});

//Task 2

var imgArr = ['img/1.JPG', 'img/2.JPG', 'img/3.JPG', 'img/4.JPG'];

for (var i = 0; i < imgArr.length; i++) {
    var img = document.createElement('img');
    img.src = imgArr[i];
    img.alt = "Cute squirrel " + (i+1);
    var parent = document.querySelector('.pictures');
    parent.appendChild(img);
}

//Task 3 & 4
var submitLink = document.querySelector('.submit_link');
var urlArr = ['https://www.', 'https://', 'http://www.', 'http://', 'www.'];

submitLink.onclick = function (e) {
    e.preventDefault();
    var link = document.querySelector('.link').value;
    console.log(link);
    var result = document.querySelector('.result');

    urlArr.forEach(function (elem) {
        if (link.indexOf(elem) === 0) {
            var newLink = link.slice(elem.length);
            console.log(newLink);
            result.textContent = newLink; 
            brake;
        } else if ((link.indexOf(elem) !== 0)) {
            result.textContent = link;
        }
    });
};

//task 5
//Clear spaces
const form = document.user;
function clearSpace (input) {
    input.value = input.value.replace(/\s/g, '');
}
// };
function validate(form) {
    var fail = false;
    var famName = form.family.value;
    var firstName = form.first_name.value;
    var password = form.password.value;
    if (famName.length == 0 || firstName.length == 0) {
        fail = 'Please fill in your name';
    } else if (password == ''){
        fail = "Please enter your password";
    }
    else if (password.length < 5) {
        fail = 'Make sure your password has more than 5 letters!';
    } 
    alert(fail);
}

function validateEmail() {
    var reg = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
    var email = form.email;
    if (email.value == '') {
        alert("Please enter email");
        return false;
    } else if (reg.test(email.value) == false) {
        alert("Invalid email address");
        return false;
    } else {
        console.log(true);
    }
}

var submitBtn = document.querySelector('.submit_form');
submitBtn.addEventListener('click', validateEmail);



//Test 6
var key = document.getElementById('keycode');
var area = document.getElementById('area');
key.addEventListener('keydown', function (event) {
    var keyCode = event.keyCode;
    area.value += keyCode + ', ';
});

