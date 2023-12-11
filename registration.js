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

function ValidDate(event){
    let day = document.getElementById("day").value;
    let year = document.getElementById("year").value;
    if (year != '' || day != ''){
        event.preventDefault()
    }
}