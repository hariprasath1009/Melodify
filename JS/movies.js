function Musics(){
    window.location.href="./musics.html"
}

function Language(){
    
    //Selecting the language 
    var language=document.getElementById("lan").value
    console.log(language)

    //Validating the language 
    if (language=="tamil"){
        window.location.href="../HTML/Tamil_movies.html"
    }

    else if(language=="telugu"){
        window.location.href="../HTML/Telugu_movies.html"
    }
    
    else if(language=="english"){
        window.location.href="../HTML/English_movies.html"
    }
    else{
        alert("Please Choose Language")
    }


}