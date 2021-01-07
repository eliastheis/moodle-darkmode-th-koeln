console.log("[DarkMode] loading generalElements.js...");

classes = [
	"card",
	"has-blocks",
	"card-body",
]

// body
document.body.style.backgroundColor = backgroundColor;
document.body.style.color = textColor;

// region-main
elem = document.getElementById("region-main");
elem.style.background = backgroundColor;
elem.style.color = textColor;
elem.style.borderColor = borderColor;

// classes
for (let i = 0; i < classes.length; i++) {
    elems = document.getElementsByClassName(classes[i]);
    for (let j = 0; j < elems.length; j++){
        try {
            if (classes[i] == "bg-dark"){
                elems[j].classList.remove("bg-dark");
            }
            if (classes[i] == "text-light"){
                elems[j].classList.remove("text-light");
            }
            elems[j].style.backgroundColor = backgroundColor;
            elems[j].style.color = textColor;
            elems[j].style.borderColor = borderColor;
        } catch (e){}
        

    }
}

// text fields
elems = document.getElementsByTagName("input")
for (let i = 0; i < elems.length; i++) {
	elems[i].style.backgroundColor = backgroundColorLight;
	elems[i].style.color = textColor;
}

// scroll up button
try {
    elem = document.querySelectorAll('[role="button"]')[13]
    elem.style.backgroundColor = backgroundColor;
    elem.style.color = textColor;
} catch (e){}