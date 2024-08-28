let userName = document.getElementById('user-name');
let profileImg = document.getElementById('profile-img');
const data = JSON.parse(localStorage.getItem('userData'));
let logoutBtn = document.getElementById('logout');

let findLogin = data.find((user) => {
    return user.isLogin === true;
})

function redirectLogin(){
    if(!findLogin){
        window.location.href = '../Login/login.html';
    }
}

redirectLogin();

const showData = () => {
    const {name,userImg} = findLogin;
    userName.innerText = name;
    profileImg.src = userImg;
}

showData();

const logout = () => {
    findLogin.isLogin = false;
    localStorage.setItem("userData",JSON.stringify(data));
    swal({
        title: "Logout Successfully",
        icon: "success",
        button: "Aww yiss!",
      });
    setTimeout(() => {
        window.location.href = "../Login/login.html";
    },3000)
}

logoutBtn.addEventListener('click',logout);