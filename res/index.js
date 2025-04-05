function pinclick() {
    //messagebox("haii >_<");
    messagebox("<img src='https://media.tenor.com/LwfpUq5ZagUAAAAj/spin-it-dancing.gif'>");
}

function closemsgbox() {
    document.getElementById("messagebox").style.visibility = "hidden";
    document.getElementById("messageboxtext").innerHTML = "";
}

function messagebox(message) {
    document.getElementById("messagebox").style.visibility = "visible";
    document.getElementById("messageboxtext").innerHTML = message ??
        "hello, world!";
}
