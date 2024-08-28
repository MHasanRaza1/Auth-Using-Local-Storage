let formFields = document.querySelectorAll('form input');
let [userEmail, userPassword] = formFields;
const data = JSON.parse(localStorage.getItem("userData"));
let error = document.getElementById('error');

let findLogin = data.find((user) => {
    return user.isLogin === true;
})

function redirectLogin(){
    if(findLogin){
        window.location.href = '../Dashboard/dashboard.html';
    }
}
redirectLogin();

const login = () => {
    event.preventDefault();
    error.innerHTML = ''
    if(data !== null){
        let findUser = data.find((user) => {
            return user.email === userEmail.value;
        })
        if(findUser){
            if(findUser.password === userPassword.value){
                findUser.isLogin = true;
                localStorage.setItem("userData",JSON.stringify(data));
                swal({
                    title: "Login Successfully",
                    icon: "success",
                    button: "Aww yiss!",
                  });
                setTimeout(() => {
                    window.location.href = "../Dashboard/dashboard.html";
                },3000)
            }
            else{
                error.innerHTML = `<p id="error-text">Invalid Credentials</p>`;
                document.getElementById('error-text').style.color = 'red';
            }
        }
        else{
            error.innerHTML = `<p id="error-text">User is not Registered</p>`;
            document.getElementById('error-text').style.color = 'red';
        }
    }
    else{
        error.innerHTML = `<p id="error-text">Please Enter your Details</p>`;
        document.getElementById('error-text').style.color = 'red';
    }
}