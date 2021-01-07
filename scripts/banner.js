console.log('[DarkMode] loading banner.js...');

// title
try {
  elem = document.getElementsByClassName('site-name')[0]
  elem.style.color = backgroundColor;
} catch (e) {}

// search box
elem = document.getElementsByClassName('form-control')[0]
elem.style.backgroundColor = backgroundColorLight;
elem.style.color = textColor;

// username
try {
  elem = document.getElementsByClassName('usertext')[0]
  elem.style.color = backgroundColor;
} catch (e) {}

// dropdownarrow
try {
  elem = document.getElementsByClassName('dropdown-toggle')[1]
  elem.style.color = backgroundColor;
} catch (e) {}

classes_light = [
  'popover-region-container',
  'popover-region-footer-container'
]
for (let i = 0; i < classes_light.length; i++) {
  elems = document.getElementsByClassName(classes_light[i]);
  for (let j = 0; j < elems.length; j++) {
    try {
      elems[j].style.backgroundColor = backgroundColorLight;
      elems[j].style.color = color;
    } catch (e) {}
  }
}
