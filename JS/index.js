//Check box for show password
function ShowPassword() {
    //selecting input box
    var Password1 = document.getElementById("pass")

    //showing password validation
    if (Password1.type === "password") {
        Password1.type = "text"
    }
    else {
        Password1.type = "password"
    }
}

//Login Validation
function LoginFunction() {
    //Object Literals (Dictionary) for storing username and password
    var DB = { "username": "admin", "password": "1234" }

    //selecting the input boxes
    var Username = document.getElementById("uname").value
    var Password2 = document.getElementById("pass").value
    if ((DB["username"] === Username) && (DB["password"] == Password2)){
        window.location.href="./HTML/home.html"
    }
    else{
        alert("Invalid Username or Password")
    }

}



//alert
setTimeout("alert(`Username : admin \nPassword : 1234`)", 2000);