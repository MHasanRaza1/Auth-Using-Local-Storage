const data = JSON.parse(localStorage.getItem("userData"));

let findLogin = data.find((user) => {
    return user.isLogin === true;
})

function redirectLogin(){
    if(findLogin){
        window.location.href = '../dashboard/dashboard.html';
    }
}
redirectLogin();