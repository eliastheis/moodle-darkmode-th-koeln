console.log('[DarkMode] loading mod_folder.js...');

// tables (tbody)
elems = document.getElementsByTagName('tbody');
for (let j = 0; j < elems.length; j++) {
  try {
    elems[j].style.border = 'none';
  } catch (e) {}
}
