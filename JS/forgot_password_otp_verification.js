//generating 6 digit otp
var otp = Math.floor(100000 + Math.random() * 900000);
setTimeout("alert(otp)", 2000);

function ValidateOTP(){

    //selecting input box
    var otpbox=document.getElementById("inputotp").value

    //validating the given otp correct or wrong
    if (otp === Number(otpbox)){
        window.location.href="../HTML/password_successful.html"
    }
    else{
        alert("Invalid OTP")
    }
}

//showing generated otp in alert
function GenerateOTP(){
    setTimeout("alert(otp)", 2000);
}
