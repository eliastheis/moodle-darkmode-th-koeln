console.log('[DarkMode] loading report_filehash.js...');

elems = document.getElementsByTagName('th');
for (let i = 0; i < elems.length; i++) {
  addDefaultDesign(elems[i]);
}

elems = document.getElementsByTagName('pre');
for (let i = 0; i < elems.length; i++) {
  addDefaultDesign(elems[i]);
}

elems = document.getElementsByTagName('td');
for (let i = 0; i < elems.length; i++) {
  addDefaultDesign(elems[i]);
}