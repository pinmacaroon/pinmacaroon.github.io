const PATTERNS = {
    BLANK: /^(\s|\n)*$/gm,
    COMMENT: /<!--.*-->/g, // * <!--example--> *
    EMPTYLINE: /^\s*$/gm, // |   |
    NLSYMBOL: /%\?%/g,
    HEXCHAR: /#[0-1]{4};/g, // * #0000; *
    IMAGE: /^!\[.+\]\(\S+\)/, // | ![alt](https://example.com/image.png) |
    LINK: /\[.+\]\(\S+\)/, // * [alt](https://example.com/) *
    LITERALLINK: /<\S+>/, // * <https://example.com/> *
    HEADER: /^#{1,6}\s/, // | #*1-6 header |
    FOOTNOTE: /^-#\s/, // | -# footnote |
    HR: /^-{3,}\s*$/, // | --- |
    ITALIC: /\*.+\*/, // * *italic* *
    BOLD: /\*{2}.+\*{2}/, // * **bold** *
    CROSS: /~{2}.+~{2}/, // * ~~crossed~~ *
    SPOILER: /\|{2}.+\|{2}/ // * ||spoiler|| *
};

function render(src){
    //"".replaceAll(PATTERNS.COMMENT, "");
    src = src.replaceAll(PATTERNS.COMMENT, "");
    src = src.replaceAll('<', '&lt;');
    src = src.replaceAll('>', '&gt;');
    //src = src.replaceAll('&', '&amp;');
    let split = src.split(PATTERNS.EMPTYLINE);
    let filtered = [];
    split.forEach((val, index, array) => {
        if(val.trim() == ""){
            console.log(val);
            return;
        } else {
            filtered.push(val.trim());
            return;
        }
    });
    let rendered = document.createElement("span");
    filtered.forEach((val, index, array) => {
        if(val.match(PATTERNS.HR) != null){
            rendered.append(document.createElement("hr"));
            return;
        } else if(val.match(PATTERNS.HEADER) != null){
            let content = val.slice(val.indexOf(" ")+1);
            let hlevel = val.slice(0, val.indexOf(" ")).length;
            let paragraph = document.createElement(`h${hlevel}`);
            paragraph.innerHTML = content;
            rendered.append(paragraph);
            return;
        } else if(val.match(PATTERNS.FOOTNOTE) != null){
            let content = val.slice(val.indexOf(" ")+1);
            let paragraph = document.createElement('p');
            let small = document.createElement('small');
            small.innerHTML = content;
            paragraph.appendChild(small);
            rendered.append(paragraph);
            return;
        }
        else {
            //TODO detect bold and italic and stuff
            let paragraph = document.createElement("p");
            paragraph.innerHTML = val;
            rendered.append(paragraph);
            return;
        }
    });
    console.log(JSON.stringify(filtered, null, 4));
    return rendered;
}