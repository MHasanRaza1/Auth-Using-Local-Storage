let form = document.querySelectorAll("form input");
let [userEmail, userPassword] = form;
const data = JSON.parse(localStorage.getItem("userDetails"));
let error = document.getElementById('error');

const login = () => {
    event.preventDefault();
    const { signupEmail, signupPassword } = data;
    if((signupEmail === userEmail.value) && (signupPassword === userPassword.value)){
        swal({
            title: "You are successfully Login",
            text: "You clicked the button!",
            icon: "success",
            button: "Aww yiss!",
        });
        setTimeout(() => {
            window.location.href = '../Dashboard/dashboard.html';
        },2000)
    } 
    else{
        error.innerHTML = '<p id="error">Invalid Credentials</p>';
        document.getElementById("error").style.color = "red";
    }
}