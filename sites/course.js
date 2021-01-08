console.log('[DarkMode] loading course.js...');


elems = document.getElementsByClassName('region_main_settings_menu_proxy')
for (let i = 0; i < elems.length; i++) {
	addDefaultDesign(elems[i]);
}