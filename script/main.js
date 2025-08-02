function mulberry32(a) {
    let t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
}

function r(seed, min, max){
    return Math.round(mulberry32(seed) * (max - min) + min);
}
function r2(seed, min, max){
    return Math.round(Math.random() * (max - min) + min);
}

const SHITPOSTS = [
    "https://i.redd.it/yt36dwb10jhb1.gif",
    "https://i.redd.it/colpc5dyjrxe1.gif",
    "https://cdn.discordapp.com/attachments/1260508195454189661/1371888132835905658/fe8fa1b7ff7acea4eb660f97590343e4.jpg?ex=688d9523&is=688c43a3&hm=2ee758d244d41b4d74ca01345221c5cac2e2e3762f7523ab0f739c3848854225&",
    "https://media.discordapp.net/attachments/1260508195454189661/1371888216495362108/a8caed779598508f9ae9fb7e3e1ffe88.jpg?ex=688d9537&is=688c43b7&hm=14926b70d1111cddd073d3a16d9fafc8c0c88065d58c75e62ff0cc6938d01719&=&format=webp",
    "https://media.discordapp.net/attachments/1260508195454189661/1371888133687476224/44122be3900abab54190b9c37af49f2e.jpg?ex=688d9523&is=688c43a3&hm=f2ce04991cee314e48bca5c3454e67de4f2b7536ca8b05d3fbfe79c611a1a529&=&format=webp",
    "https://cdn.discordapp.com/attachments/1260508195454189661/1369373891704656002/image.png?ex=688daa11&is=688c5891&hm=1f9bd8b0fad1c9caafe93e2e9d2c51980c3b4fba2339518e52099c3eeb6a41fd&",
    "https://media.discordapp.net/attachments/665268653461078057/1194679118973907064/attachment-7.gif?ex=688d93e2&is=688c4262&hm=59da74b9a0c851ba1b108666a64e59b8d4ebbd26611a53ff5c8ee9c059a4ab1a&",
    "https://cdn.discordapp.com/attachments/1260508195454189661/1325432302196752485/IMG_3257.png?ex=688dfc86&is=688cab06&hm=25703bf8c3e621bd104b00da5718b07df69c3c89bf9d58fe0b280690cb709c56&",
    "https://ugc.production.linktr.ee/2d84099d-c515-44b8-b8ae-b96a73564a57_garfield-breakdance.gif",
    "https://i.redd.it/01ecsrdbe28e1.gif",
    "https://cdn.discordapp.com/attachments/1260508195454189661/1310632754425368596/caption.gif?ex=688d8a1f&is=688c389f&hm=e07ed88133fc957e81984401af27431821557b1d18a214ca775efa7c3c87fe5d&",
    "https://cdn.discordapp.com/attachments/1260508195454189661/1306350704470003722/Screenshot_2024-10-31_175721.png?ex=688dc826&is=688c76a6&hm=493c19a0c0e59f40d41a4d38fa662ba6c4c12fe760fb6284d7fb089ef6a4b975&",
    "https://i.pinimg.com/originals/75/b8/f2/75b8f250327d7e7ec1164e08105e238c.jpg",
    "https://media.discordapp.net/attachments/1389944304897626132/1400837827083763876/ivowjo2nddgf1.png?ex=688e1764&is=688cc5e4&hm=dc16ca09b4fa6eebe8bfff24a01e6787bb54afa00bed5dacaee90a0131f73117&=&format=webp&quality=lossless",
    "https://cdn.discordapp.com/attachments/1260508195454189661/1391022534883016766/ezgif-6d129a79a98a96.gif?ex=688dfab0&is=688ca930&hm=4fe28bf665379a741a5d5570b842051c9bbeea331475bade603f387dc3b6182e&",
    "https://cdn.discordapp.com/attachments/946156666171297833/1389589055347626045/caption-6.gif ",
    "https://c.tenor.com/OZd3MUESLGgAAAAd/tenor.gif",
    "https://cdn.discordapp.com/attachments/1228019590685003810/1382453035690627122/1984.gif",
    "https://c.tenor.com/PLWo7CzrD2EAAAAd/tenor.gif",
    "https://c.tenor.com/31p1mU0aPw0AAAAd/tenor.gif",
    "https://c.tenor.com/4MZ-cLGArHQAAAAd/tenor.gif",
    "https://i.redd.it/j50zg4fb0jwe1.gif",
    "https://cdn.discordapp.com/attachments/1389944304897626132/1400206757061722212/image0.jpg?ex=688dc5e9&is=688c7469&hm=a98a367fd5a20ae1fa3a03aa94c7c2c0701aed09eeeccf51b52220b1f3b86b61&",
    //"/resource/placeholder_HELLO_REPLACE_ME_PLS.png",
]

const QUOTES = [
    "We are the Sultans of Swing",
    "a woven net of both shakespearean words and sailor's charm",
    "My enclosure is shrinking like my sanity",
    "i know macarons and macaroons are not the same, shut up",
    "arch and the humble roblox addiction",
    "pin and the humble roblox addiction",
    "im not freaky its for research",
    "Come sit your fat butt on my shadows.",
    "And there goes the idiot.",
    "The pole dancing british wood elf?",
    "my soul is just an expired voucher for a free wendy's cheeseburger",
    "Chases child with pasta",
    "INCEST? IN FRONT OF MY SALAD?",
    "WELL HES ALSO SHITLESS BUT THATS A GIVEN PEOPLE DONT USUALLY WALK AROUND WITH SHITS",
    "Oh goodness they gayness is making me ascend",
    "I'M GONNA POP HIS TIRES AND THEN MAKE HIM GAY BY KISSING HIM",
    "Hope the monster licks yo tippy toes at night"
]

window.addEventListener("load", async function () {
    var date = new Date();
    var seed = date.getDate()+date.getMonth()+date.getFullYear();
    $("span#quote_span").html(QUOTES[r2(null, 0, QUOTES.length)]);
    $("img#shitpost_img").attr('src', SHITPOSTS[r(seed, 0, SHITPOSTS.length)]);
});