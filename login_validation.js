function submit_data(){
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    var chk1 = /^[a-zA-Z]*$/;
    var chk2 = /^[a-zA-Z0-9]*$/;
    var user = /^hod$/;
    var pass = /^a$/;

    if(username!="" && password!=""){
        if(username.match(chk1) && password.match(chk2)){
        if(username.match(user) && password.match(pass)){
            alert("Welcome "+username);
            window.location = "hod_page.html";
        }
        else{
            alert("Welcome "+username);
            window.location = "faculty_page.html";
        }
        // else{
        //     if(username.match(user)){
        //         alert("Please enter Valid Password !!!");
        //     }
        //     else{
        //         alert("Please enter Valid username !!!");
        //     }
        // }
    }
        else{
            alert("Username should contain only alphabets and password should not contain any special characters!!!");
        }
    }
    else{
        alert("Please enter username and password !!!")
    }
    }