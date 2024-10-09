function validateForm(event) {
  
    event.preventDefault();
    signUpForm = document.getElementById("signUpForm");
    username = document.getElementById("username");
    password = document.getElementById("password");

    if (username.value.length < 5) {
      error.innerHTML = "Username must be at least 5 characters!"
        alert("Username must be at least 5 characters!");
      } else if (!isAlphanumeric(password.value)) {
        error.innerHTML = "Password must be alphanumeric!";
        alert("Password must be alphanumeric!");
    } else {
        error.innerHTML = "";
        alert("Successful!");
        signUpForm.submit();
        window.location.href = "/MoviePage/MoviePage.html";
    }
}

function isAlphanumeric(pw){
    var num = false
    var alpha = false
    for(let i = 0; i < pw.length; i++){
        if(!isNaN(pw[i])){
            num = true
        }
        else{
            alpha = true
        }
        if(num && alpha){
            return true
        }
    }
    return false
}
  