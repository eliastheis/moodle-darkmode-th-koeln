console.log("[DarkMode] loading chat.js...");

elems = document.getElementsByClassName("py-0")
for (let i = 1; i < elems.length; i++) {
    elems[i].style.backgroundColor = backgroundColor;
    elems[i].style.color = color;
}