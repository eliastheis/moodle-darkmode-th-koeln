console.log("[DarkMode] loading user.js...");

// filter
elem = document.getElementsByClassName("filter-group my-2 p-2 bg-light border-radius border")[0]
elem.classList.remove("bg-light");
addDefaultDesign(elem);
elem = document.getElementsByClassName("border-radius my-2 p-2 bg-white border d-flex flex-column flex-md-row align-items-md-start")[0]
elem.classList.remove("bg-white");
addDefaultDesign(elem);
