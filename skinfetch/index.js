function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

async function onchange2() {
    if($("#refresh_field").is(':checked')){
        onsubmit2();
    }
}

let url;

async function ondownload() {
    let fileparts = await (await fetch(url)).text();
    let fileurl = URL.createObjectURL(fileparts);
    $("body").append(`<a href='${fileurl}' download='image.png' id='fakedllink'></a>`);
    $("#fakedllink").click();
    $("body").remove('#fakedllink');
   
}

async function onsubmit2() {
    //event.preventDefault();
    let name = $("#name_field").val();
    if (name == "" || name == null) {
        alert("the name is blank!");
        return;
    }
    let mode = $("#mode_field").val();
    let armor = $("#armor_field").is(':checked');
    let size = $('#size_field').val();
    if(mode == "avatar"){
        url = `https://crafthead.net/avatar/${name}`;
    }
    else if(mode== "skin"){
        url = `https://crafthead.net/skin/${name}`;
    }
    else if(armor == true){
        url = `https://crafthead.net/armor/${mode}/${name}/${size}`;
    }
    else{
        url = `https://crafthead.net/${mode}/${name}/${size}`;
    }
    $("#result_a").attr('href', url);
    $("#result_img").attr('src', url);

    let e = new Date(); e.setMonth(new Date().getMonth() + 12);
    console.log(e.toUTCString());
    document.cookie = `lastusername=${name}; expires=${e.toUTCString()}`;
    return;
}

window.addEventListener("load", function () {
    $("#name_field").val(getCookie("lastusername"));
    $('#slider_val').html($('#size_field').val());
    onsubmit2();
});

async function modeselectchange() {
    let newval = $("#mode_field").val();
    $("#armor_field").prop('disabled', false);
    $("#size_field").prop('disabled', false);
    if(newval == "avatar"){
        $("#armor_field").attr('disabled', 'true');
        $("#armor_field").prop('checked', false);
        $("#size_field").attr('disabled', 'true');
    }
    else if(newval == "skin"){
        $("#armor_field").attr('disabled', 'true');
        $("#size_field").attr('disabled', 'true');
    }
    else if(newval == "helm"){
        $("#armor_field").attr('disabled', 'true');
        $("#armor_field").prop('checked', false);
    } else {
        $("#armor_field").prop('disabled', false);
        $("#size_field").prop('disabled', false);
    }
}