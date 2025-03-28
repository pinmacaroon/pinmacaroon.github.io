async function main(){
    //let rsp = await fetch("https://api.mcsrvstat.us/3/pinboxsmp.falixsrv.me");
    let rsp = await fetch("https://api.mcsrvstat.us/3/play.ultravanilla.world");
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
            /*
            0: Object { name: "Carla2064103", uuid: "b249066a-4a43-4224-8c58-a5f04605dcd3" }
            1: Object { name: "Crumpy", uuid: "95073f0d-1ba9-38a3-888c-4d77b19c7bd2" }
            2: Object { name: "Dexter", uuid: "e161549c-604a-32c8-aff7-bb1dd4220f74" }
            3: Object { name: "Hedged47", uuid: "8c1672b1-f8e5-4239-87cc-56d339b031ba" }
            4: Object { name: "PotatoNinja", uuid: "9f56d8f9-f9b5-343e-98d5-7846294adbb4" }
            5: Object { name: "SIrTaterChip", uuid: "54702623-052b-41fe-9eca-df429f556d08" }
            6: Object { name: "TimkaTime54O", uuid: "b0bb4f98-2266-3dc1-870c-2aad3e0b4161" }
            7: Object { name: "Tw_Xulmz", uuid: "f33c7d18-f1e9-3313-b3e6-5245f2a21369" }
            8: Object { name: "wardenslayer", uuid: "3c0e1085-a7e6-35fc-82be-ce1a5833e132" }
            9: Object { name: "_4rb", uuid: "d5c1877d-975a-3456-ad6f-0ae30a8ee278" }
            */
            
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