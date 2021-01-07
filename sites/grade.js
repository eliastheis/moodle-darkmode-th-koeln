console.log("[DarkMode] loading grade.js...");

elem = document.getElementsByTagName("thead")[0];
addDefaultDesign(elem);

elems = document.getElementsByTagName("th");
for (let i = 0; i < elems.length; i++) {
    addDefaultDesign(elems[i])
}

elems = document.getElementsByClassName("item");
for (let i = 0; i < elems.length; i++) {
    addDefaultDesign(elems[i])
}
elems = document.getElementsByClassName("itemcenter");
for (let i = 0; i < elems.length; i++) {
    addDefaultDesign(elems[i])
}