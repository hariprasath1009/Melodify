function ValidateNumber(){
    //selecting input box
    var MobileNo=document.getElementById("mobileno").value

    //validating the given mobile number
    var flagmobile=true
    if((MobileNo.length == 10)  && (MobileNo[0] >= 6)  && (MobileNo[0] <= 9)){
        flagmobile=true
    }
    else{
        flagmobile=false
    }

    if (flagmobile == true){
        window.location.href="../HTML/Forgot_password_otp_verification.html"
    }
    else{
        alert("Invalid Mobile Number")
    }

}