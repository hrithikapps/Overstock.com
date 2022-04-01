document.querySelector("#createbtn").addEventListener("click",signup);

document.getElementById("signbtn").addEventListener("click",signin);

var userData = JSON.parse(localStorage.getItem("userDatabase")) || [];
// var regdUsers = JSON.parse(localStorage.getItem("userDatabase"));

function signup(){
    let email=document.getElementById("email").value;
    let password=document.getElementById("password1").value;
    let password_2=document.getElementById("password2").value;

    if(password!=password_2){
        alert("Wrong Credentials Entered , Re-Enter Password")
    }
    else{
        var user={
            emailadd:email,
            pd:password,
        };
        userData.push(user);
        alert("Account created Successfully!");
        localStorage.setItem("userDatabase",JSON.stringify(userData));
        window.location.href = "index.html"
    }
}

function signin(){


  let email = document.getElementById("emailID").value;
  let password = document.getElementById("passwordID").value;

  let flag = false;
  if (email == "") {
    alert("Please enter an email!");
  }
 
  else if (password == "") {
    alert("Please enter password")
  }

  else {
    for (var i = 0; i < userData.length; i++) {

        if(email=="admin" && password=="admin"){
            window.location.href="admin.html";
            alert("Welcome to Admin Page");
            flag= true;
            break;
        }
      if (email == userData[i].emailadd && password == userData[i].pd) {
        window.location.href = "index.html";
        
        flag = true;
        break;
      }

    }

    if(flag) {
      alert("Login Successfully!");
    }else{
      alert("Wrong Credentials");
    }

 }
}
