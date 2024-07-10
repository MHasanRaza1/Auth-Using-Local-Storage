const data = JSON.parse(localStorage.getItem("userDetails"));
let userName = document.getElementById('name');
let imageProfie = document.getElementById('img')
let logout = document.getElementById('logout');

const showData = () => {
    const {user, userProfile} = data;
    userName.innerHTML = user;
    imageProfie.src = userProfile
}

showData();

const userLogout = () => {
    localStorage.clear();
    window.location.href = "../Login/login.html"
}