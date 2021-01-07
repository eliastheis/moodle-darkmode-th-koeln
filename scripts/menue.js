console.log('[DarkMode] loading menue.js...');

classesLight = [
  'list-group',
  'list-group-item',
]

classesLightest = [
  'list-group-item.active',
  'active',
]

idsLight = [
  'nav-drawer',
]

// classes light
for (let i = 0; i < classesLight.length; i++) {
  elems = document.getElementsByClassName(classesLight[i]);
  for (let j = 0; j < elems.length; j++) {
    try {
      elems[j].style.backgroundColor = backgroundColorLight;
      elems[j].style.color = textColor;
      elems[j].style.borderColor = menueBorderColor;
    } catch (e) {}
  }
}

// classes lightest
for (let i = 0; i < classesLightest.length; i++) {
  elems = document.getElementsByClassName(classesLightest[i]);
  for (let j = 0; j < elems.length; j++) {
    try {
      elems[j].style.backgroundColor = backgroundColorLightest;
      elems[j].style.color = textColor;
      elems[j].style.borderColor = menueBorderColor;
    } catch (e) {}
  }
}

// IDs light
for (let i = 0; i < idsLight.length; i++) {
  document.getElementById(idsLight[i]).style.backgroundColor = backgroundColorLight;
  document.getElementById(idsLight[i]).style.color = textColor;
}
