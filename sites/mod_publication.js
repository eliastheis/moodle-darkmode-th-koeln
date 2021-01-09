console.log('[DarkMode] loading mod_publication.js...');


elems = document.getElementsByTagName('tbody');
for (let j = 0; j < elems.length; j++) {
  try {
    elems[j].style.border = "";
  } catch (e) {}
}


elems = document.getElementsByClassName('timemodified');
for (let j = 0; j < elems.length; j++) {
  try {
    elems[j].style.color = textColor;
  } catch (e) {}
}