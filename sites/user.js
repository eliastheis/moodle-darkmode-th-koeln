console.log("[DarkMode] loading user.js...");

// filter
elem = document.getElementsByClassName("filter-group my-2 p-2 bg-light border-radius border")[0];
elem.classList.remove("bg-light");
elem.classList.remove("border");
addDefaultDesignWithBorder(elem);
elem = document.getElementsByClassName("border-radius my-2 p-2 bg-white border d-flex flex-column flex-md-row align-items-md-start")[0];
elem.classList.remove("bg-white");
elem.classList.remove("border");
addDefaultDesignWithBorder(elem);
// filter reset
elem = document.querySelectorAll('[data-filteraction="reset"]')[0];
addDefaultDesignWithBorder(elem);

// alphabet (not working)
/*
elems = document.getElementsByClassName("page-item");
for (let i = 0; i < elems.length; i++) {
	addDefaultDesign(elems[i])
}*/

// list
elems = document.getElementsByClassName("c1");
for (let i = 0; i < elems.length; i++) {
	addDefaultDesign(elems[i])
}
elems = document.getElementsByClassName("c2");
for (let i = 0; i < elems.length; i++) {
	addDefaultDesign(elems[i])
}