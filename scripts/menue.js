console.log('[DarkMode] loading menue.js...');

classes_light = [
  'list-group',
  'list-group-item'
]

classes_lightest = [
  'list-group-item.active',
  'active'
]

ids_light = [
  'nav-drawer'
]

// classes light
for (let i = 0; i < classes_light.length; i++) {
  elems = document.getElementsByClassName(classes_light[i]);
  for (let j = 0; j < elems.length; j++) {
    try {
      elems[j].style.backgroundColor = backgroundColorLight;
      elems[j].style.color = textColor;
      elems[j].style.borderColor = menueBorderColor;
    } catch (e) {}
  }
}

// classes lightest
for (let i = 0; i < classes_lightest.length; i++) {
  elems = document.getElementsByClassName(classes_lightest[i]);
  for (let j = 0; j < elems.length; j++) {
    try {
      elems[j].style.backgroundColor = backgroundColorLightest;
      elems[j].style.color = textColor;
      elems[j].style.borderColor = menueBorderColor;
    } catch (e) {}
  }
}

// IDs light
for (let i = 0; i < ids_light.length; i++) {
  document.getElementById(ids_light[i]).style.backgroundColor = backgroundColorLight;
  document.getElementById(ids_light[i]).style.color = textColor;
}
