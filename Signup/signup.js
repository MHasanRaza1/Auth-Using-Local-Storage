let form = document.querySelectorAll("form input");
const [userEmail, userName, userPassword, userPic] = form;
// console.log(userEmail, userName, userPassword, userPic);
let imgUrl;
let emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let error = document.getElementById("error");

const regexChecker = () => {
    event.preventDefault();
    if(emailReg.test(userEmail.value) && (passwordReg.test(userPassword.value))){
        signup();
    }
    else{
        error.innerHTML =  `<p id="regex">Email and Password must follow the standard!<p>`;
        document.getElementById('regex').style.color = 'red'; 
    }
}

const signup = () => {
    // event.preventDefault();
    if(userEmail.value != "" && userName.value != "" && userPassword.value != ""){
        let obj = {
            signupEmail: userEmail.value,
            user: userName.value,
            signupPassword: userPassword.value,
            userProfile: imgUrl,
        }
        swal({
            title: "You are successfully SignUp",
            text: "You clicked the button!",
            icon: "success",
            button: "Aww yiss!",
        });
        localStorage.setItem("userDetails",JSON.stringify(obj));
        setTimeout(() => {
            window.location.href = "../Login/login.html";
        },2000)
    }
    else{
        error.innerHTML =  '<p id="empty">Enter Email and Password first.</p>';
        document.getElementById('empty').style.color = 'red'; 
    }
}

const uploadImage = () => {
    let img = userPic.files[0];
    let fileRead = new FileReader();
    fileRead.onload = () => {
        imgUrl = fileRead.result;
        console.log('imgUrl',imgUrl)
    }
    fileRead.readAsDataURL(img)
    console.log('64URL',fileRead.readAsDataURL(img))
}