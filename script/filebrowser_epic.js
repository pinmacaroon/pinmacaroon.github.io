async function goto_onsub() {
    var newpath = $("#path_box").val();
    if(newpath == null || newpath.trim().length == 0) return;
    newpath = newpath.trim();
    var response = await fetch("https://api.github.com/repos/pinmacaroon/pinmacaroon.github.io/contents/misc" + newpath);
    var data = await response.json().then((data) => data = data);
    console.log(data);
    if(data.status || data.message){
        $("#filebrowser_ul").empty();
        $("#filebrowser_ul").append(`<li><a href="javascript:void(0);" onclick="$('#path_box').val('/');goto_onsub();"><div class="famfamfam-silk folder"></div>misc/</a></li>`);
        $("#filebrowser_ul").append(`<li>${data.message}</li>`);
        return;
    }
    $("#filebrowser_ul").empty();
    $("#filebrowser_ul").append(`<li><a href="javascript:void(0);" onclick="$('#path_box').val('/');goto_onsub();"><div class="famfamfam-silk folder"></div>misc/</a></li>`);
    for (const key in data) {
        if(data[key].type == "file") {
            $("#filebrowser_ul").append(`<li><a target="_blank" href="${data[key].download_url}"><div class="famfamfam-silk page"></div>${data[key].path}</a></li>`);
        } else {
            var spath = data[key].path.split("/");
            var refpath = "";
            spath.forEach(function(val, i, array){
                if(i == 0)return;
                refpath += "/" +val;
            });
            console.log(spath);
            
            $("#filebrowser_ul").append(`<li><a href="javascript:void(0);" onclick="$('#path_box').val('${refpath}');goto_onsub();"><div class="famfamfam-silk folder"></div>${data[key].path}</a></li>`);
        }
    }
    return;
}

window.addEventListener("load", async function () {
    goto_onsub();
});