document.getElementById("signupForm").addEventListener("submit", function(e){

    e.preventDefault();

    let fname = document.getElementById("fname").value;
    let sname = document.getElementById("sname").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(fname === "" || sname === "" || mobile === "" || email === "" || password === ""){
        alert("Please fill all fields");
        return;
    }

    if(password.length < 6){
        alert("Password must be at least 6 characters");
        return;
    }

    alert("Signup Successful ✅");

});