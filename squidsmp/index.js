async function main(){
    let rsp = await fetch("https://api.mcsrvstat.us/3/pinboxsmp.falixsrv.me");
    let data = await rsp.json();
    setTimeout(function(){}, 500)
    data = JSON.stringify(data);
    data = JSON.parse(data);
    console.log(data);
    if(data.online){
        var statsdiv = document.getElementById("statsdiv");
        statsdiv.innerHTML += "online yay :P";
    } else {
        statsdiv.innerHTML += "awww its offline ;-;";

    }
}

document.onreadystatechange = event => {
    if(document.readyState == "complete"){
        main();
    }
};