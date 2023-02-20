var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");
var signinEmail = document.getElementById("signinEmail");
var signinPassword = document.getElementById("signinPassword");

var stat = true;
var stateOfCheck = true;
var user = {};
function signUp() {
    if (signupName.value.length == 0) {
        document.getElementById("incorrect").innerHTML = "<span class='text-danger m-3'>All inputs is required</span>";
        stat=false;
    } else if (signupPassword.value.length == 0) {
        document.getElementById("incorrect").innerHTML = "<span class='text-danger m-3'>All inputs is required</span>";
        stat=false;
    } else if (signupEmail.value.length == 0 && pw.value.length == 0) {
        document.getElementById("incorrect").innerHTML = "<span class='text-danger m-3'>All inputs is required</span>";
        stat=false;
    }
    if(stat) {
        user = {
            email: signupEmail.value,
            username: signupName.value,
            password: signupPassword.value,
        };
        localStorage.setItem(user.email, JSON.stringify(user));
    }
}
function checkSignUp() {
    if (localStorage.getItem(user.email)!=null) {
        signUp();
    }
    else {
        alert("this email already exist");
    }

}
function checkLog() {
    var visitor = JSON.parse(localStorage.getItem(signinEmail.value));
    if (visitor !=null && visitor.email == signinEmail.value && visitor.password == signinPassword.value ) {
        localStorage.setItem("nam",visitor.username);
        location.href = "./home.html";
        
        // document.getElementById("us").innerHTML = ` <p>${visitor.username}</p>`;
    }
    else {
        alert("this email does'nt exist or password is wrong");
    }
}
