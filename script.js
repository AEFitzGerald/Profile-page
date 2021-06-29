
//change user name
var userName = document.querySelector("#user-name");

function newUserName() {
    userName.innerText = "Elizabet Truth";
}

//remove new connection when added or rejected

var userRow1 = document.querySelector("#user-row-1")
var userRow2 = document.querySelector("#user-row-2")

function clearUser1() {
    userRow1.remove();
}

function clearUser2() {
    userRow2.remove();
}