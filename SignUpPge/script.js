function validateForm(event) {
  
    event.preventDefault();
    signUpForm = document.getElementById("signUpForm");
    username = document.getElementById("username");
    password = document.getElementById("password");
    confirmPassword = document.getElementById("confirm");
    age = document.getElementById("age");
    male = document.getElementById("male");
    female = document.getElementById("female");
    agree = document.getElementById("agree");
    error = document.getElementById("error");
  
    if (username.value.length < 5) {
      error.innerHTML = "Username must be at least 5 characters!"
      alert("Username must be at least 5 characters!");
    } 
    else if (!isAlphanumeric(password.value)) {
      error.innerHTML = "Password must be alphanumeric!";
      alert("Password must be alphanumeric!");
    } 
    else if (password.value !== confirmPassword.value) {
      error.innerHTML = "Passwords don't match!";
      alert("Passwords don't match!");
    } 
    else if (age.value < 18) {
      error.innerHTML = "Must be at least 18 years old!"
      alert("You must be at least 18 years old!");
    } 
    else if (!(male.checked || female.checked)) {
      error.innerHTML = "Gender must be picked!"
      alert("Gender must be selected!");
    } 
    else if (!agree.checked) {
      error.innerHTML = "You must agree Agree to the Terms & Conditions!"
      alert("You must agree to continue!");
    } 
    else {
      error.innerHTML = "";
      alert("Successful!");
      signUpForm.submit();
      window.location.href = "/LoginPage/LoginPage.html";
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
  