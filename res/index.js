function closemsgbox() {
    document.getElementById("messagebox").style.visibility = "hidden";
    document.getElementById("messageboxtext").innerHTML = "";
}

function messagebox(message) {
    document.getElementById("messagebox").style.visibility = "visible";
    document.getElementById("messageboxtext").innerHTML = message ??
        "hello, world!";
}
