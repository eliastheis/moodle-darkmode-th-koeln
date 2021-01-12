console.log('[DarkMode] loading course.js...');


elems = document.getElementsByClassName('region_main_settings_menu_proxy')
for (let i = 0; i < elems.length; i++) {
  addDefaultDesign(elems[i]);
}

// tables (tbody)
elems = document.getElementsByTagName('tbody');
for (let j = 0; j < elems.length; j++) {
  try {
    elems[j].style.border = '';
  } catch (e) {}
}
