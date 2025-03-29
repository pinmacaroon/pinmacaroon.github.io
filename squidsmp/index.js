async function main(){
    let rsp = await fetch("https://api.mcsrvstat.us/3/pinboxsmp.falixsrv.me");
    //let rsp = await fetch("https://api.mcsrvstat.us/3/play.ultravanilla.world");
    let data = await rsp.json();
    setTimeout(function(){}, 500)
    data = JSON.stringify(data);
    data = JSON.parse(data);
    console.log(data);
    console.log(JSON.stringify(data));
    var statsdiv = document.getElementById("statsdiv");
    if(data.online){
        var playerlist = "";
        if(data.players.list){
            playerlist += "The following players are online: ";
            
            for(const player in data.players.list){
                playerlist += `<a href="https://namemc.com/profile/${data.players.list[player].name}" target="_blank"><img height="12" src="https://crafthead.net/helm/${data.players.list[player].uuid}">${data.players.list[player].name}</a> `;
            }
            console.log(playerlist);
        }
        var content = `
        <p>the server is currently <b>online</b>! it has <b>${data.players.online}</b> players on out of <i>${data.players.max}</i>!</p>
        <p>${playerlist}</p>
        `;
        statsdiv.innerHTML += content;
    } else {
        var content = "<p>the server is currently <b>offline</b>!</p>";
        statsdiv.innerHTML += content;
    }
}

document.onreadystatechange = event => {
    if(document.readyState == "complete"){
        main();
    }
};