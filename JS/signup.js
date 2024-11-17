function Validation(){
    //selecting all the input boxes 
    var FirstName=document.getElementById("fname").value
    var LastName=document.getElementById("lname").value
    var MobileNo=document.getElementById("mobileno").value
    var Email=document.getElementById("mail").value
    var Password=document.getElementById("pass").value
    var CPassword=document.getElementById("cpass").value

    //validating first name
    var flagfname=true
    if (FirstName == ""){
        flagfname = false
    }

    for (k=0;k<FirstName.length;k=k+1){
        if (((FirstName[k] >= "a") && (FirstName[k] <= "z")) || ((FirstName[k] >= "A") && (FirstName[k] <= "Z"))){
            undefined
        }

        else{
            flagfname = false
        }
    }

    //validating last name
    var flaglname=true
    if (LastName == ""){
        flaglname = false
    }
    
    for (m=0;m<LastName.length;m=m+1){
        if (((LastName[m] >= "a") && (LastName[m] <= "z")) || ((LastName[m] >= "A") && (LastName[m] <= "Z"))){
            undefined
        }

        else{
            flaglname = false
        }
    }

    //validating mobile number
    var flagmobile=true
    if((MobileNo.length == 10) && (MobileNo[0]>=6) && (MobileNo[0]<=9)){
        flagmobile=true
    }
    else{
        flagmobile=false
    }

    //validating email
    var flagemail=true
    if ((Email.slice(-10) == "@gmail.com") && (Email.length >= 11)){
        if ((Email[0] >= "a") && (Email[0] <= "z")){
            var remainmail=Email.slice(1,-10)
            for (j=0;j<remainmail.length;j=j+1){
                if (((remainmail[j] >= "a") && (remainmail[j] <= "z")) || ((remainmail[j] >= "1") && (remainmail[j] <= "9")) ){
                    undefined
                }
                else{
                    flagemail=false
                }
            }
        }
        else{
            flagemail=false
        }
    }
    else{
        flagemail=false
    }
    

    //validating password
    var flagpass=true

    var upper=0
    var lower=0
    var num=0
    var special=0
    for (var i=0;i<Password.length;i=i+1){
        if ((Password[i] >= "A") && (Password[i] <= "Z")){
            upper=upper+1
        }
        else if ((Password[i] >= "a") && (Password[i] <= "z")){
            lower=lower+1
        }
        else if ((Password[i] >= "0") && (Password[i] <= "9")){
            num=num+1
        }
        else{
            special=special+1
        }
    }

    if ((Password.length >= 8) && (Password.length <= 16) && (upper >= 1) && (lower >= 1) && (num >= 1) && (special >= 1)){
        flagpass=true
    }
    else{
        flagpass=false
    }


    //validating confirm password
    var flagcpass=true
    if (Password === CPassword){
        flagcpass=true
    }
    else{
        flagcpass=false
    }


    //validating all the details
    if ((flagfname == true) && (flaglname == true) && (flagmobile == true) && (flagemail == true) && (flagpass == true) && (flagcpass == true)){
        window.location.href="../HTML/Signup_otp_verification.html"
    } 

    else if ( flagfname == false){
        alert("Invalid First Name")
    }

    else if ( flaglname == false){
        alert("Invalid Last Name")
    }

    else if (flagmobile == false){
        alert("Invalid Mobile Number")
    } 

    else if (flagemail == false){
         alert("Invalid Email")   
    }

    else if (flagpass == false){
         alert("Password is too weak")
    }

    else if (flagcpass == false){
        alert("Password doesn't match")
    }

    else{
    alert("Invalid Credentials")
}

}