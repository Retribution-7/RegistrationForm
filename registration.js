function EyeInPassword(){
    let passwordInput = document.getElementById("password");
    passwordInput.type == "password" ? passwordInput.type = "text" : passwordInput.type = "password";

    let image= document.getElementById("HideImage");
    if (image.src.match("free-icon-hide-2767146.png")){
        image.src = "free-icon-eye-158746.png";
    }
    else {
        image.src = "free-icon-hide-2767146.png";
    }
}

function EyeAcceptInPassword(){
    let passwordAcceptInput = document.getElementById("passwordAccept");
    passwordAcceptInput.type == "password" ? passwordAcceptInput.type = "text" : passwordAcceptInput.type = "password";

    let image = document.getElementById("HideImageAccept");
    if (image.src.match("free-icon-hide-2767146.png")){
        image.src = "free-icon-eye-158746.png";
    }
    else {
        image.src = "free-icon-hide-2767146.png";
    }
}

function checkPassword(){
    let password = document.getElementById("password").value;
    let passwordAccept = document.getElementById("passwordAccept").value;
    if (passwordAccept == password) {
        alert("Успех!");
    }
    else{
        alert("Ошибка: пароли не совпадают")
    }
}

function validDate(){
    let day = document.getElementById("day").value;
    let year = document.getElementById("year").value;
    if (year != '' && day != '') {
        window.location.href = "password.html";
    }
    else {
        openWarningDate();
    }
}

function openWarningDigit() {
    let input = document.getElementById("password");
    input.style.animation = "none";
    input.style.borderColor = "red";
    input.style.marginBottom = "30px";
    var warning = document.getElementById("warningDigit");
    warning.classList.add("active");
  }

function openWarningHigherCase() {
    let input = document.getElementById("password");
    input.style.animation = "none";
    input.style.borderColor = "red";
    input.style.marginBottom = "30px";
    var warning = document.getElementById("warningHigherCase");
    warning.classList.add("active");
  }

function openWarningLength() {
    let input = document.getElementById("password");
    input.style.animation = "none";
    input.style.borderColor = "red";
    input.style.marginBottom = "30px";
    var warning = document.getElementById("warningLength");
    warning.classList.add("active");
  }

function openWarningSwap() {
    let passwordAccept = document.getElementById("passwordAccept");
    let password = document.getElementById("password");
    passwordAccept.style.animation = "none";
    passwordAccept.style.borderColor = "red";
    passwordAccept.style.marginBottom = "30px";
    password.style.borderColor = "red";
    var warning = document.getElementById("warningSwap");
    warning.classList.add("active");
  }
  
function openSuccess(){
    var success = document.getElementById("success");
    success.classList.add("active");
}

function openWarningName(){
    let input = document.getElementById("name");
    input.style.animation = "none";
    input.style.borderColor = "red";
    input.style.marginBottom = "30px";
    var warning = document.getElementById("warningName");
    warning.classList.add("active");
}

function openWarningEmail(){
    let input = document.getElementById("email");
    input.style.animation = "none";
    input.style.borderColor = "red";
    input.style.marginBottom = "30px";
    var warning = document.getElementById("warningEmail");
    warning.classList.add("active");
}

function openWarningDate(){
    var warning = document.getElementById("warningDate");
    warning.classList.add("active");
}

function validPasswordAndEmail() {
    var password = document.getElementById("password").value;
    var errorMessage = document.querySelector("warning");
    var passwordAccept = document.getElementById("passwordAccept");
    if (password.length < 8) {
        errorMessage.style.display = "none";
        openWarningLength();
    } else if (!/[A-Z]/.test(password)) {
        errorMessage.style.display = "none";
        openWarningHigherCase();
    } else if (!/[0-9]/.test(password)) {
        errorMessage.style.display = "none";
        openWarningDigit();
    } else if (password !== passwordAccept) {
        openWarningSwap();
    } else {
      errorMessage.style.display = "none";
    }

    let email = document.getElementById('email').value;
    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!pattern.test(String(email).toLowerCase())) {
        openWarningEmail();
    }
  }

function checkName(){
    var name = document.getElementById("name");
    if (name.value === "") {
        openWarningName();
    }
    else {
        window.location.href = "birthdaygender.html";
    }
}
