let formFields = document.querySelectorAll('form input');
let [userEmail, userName, userPassword, userImg] = formFields;
let error = document.getElementById('error');
let usersArr = JSON.parse(localStorage.getItem("userData")) || [];
userImg.value = ''
let imgUrl;

function loginAlready(){
    let userLogin = usersArr.find((user) => {
        return user.isLogin === true;
    })
    if(userLogin){
        window.location.href = "../dashboard/dashboard.html";
    }
}
loginAlready();

const signUp = () => {
    event.preventDefault();
    if(userEmail.value.trim() !== "" && userName.value.trim() !== '' && userPassword.value.trim() !== ''){
        let alreadyAccount = usersArr.find((user) => {
            return user.email === userEmail.value;
        })
        if(alreadyAccount){
            error.innerHTML = `<p id="error-text">Account is already registered on this email</p>`;
            document.getElementById('error-text').style.color = 'red';
        }
        else{
            error.innerHTML = ""
            let obj = {
                email: userEmail.value,
                password: userPassword.value,
                name: userName.value,
                userImg: imgUrl,
                isLogin: false
            }
            usersArr.push(obj);
            localStorage.setItem("userData",JSON.stringify(usersArr));
            swal({
                title: "SignUp Successfully",
                icon: "success",
                button: "Aww yiss!",
              });
            setTimeout(() => {
                window.location.href = "../login/login.html";
            },3000)
        }
    }
    else{
        error.innerHTML = `<p id="error-text">Please Enter your Details</p>`;
        document.getElementById('error-text').style.color = 'red';
    }
}

const uploadImage = () => {
    let img = userImg.files[0];
    let fileRead = new FileReader();
    fileRead.onload = () => {
        imgUrl = fileRead.result;
    }
    fileRead.readAsDataURL(img);
}
