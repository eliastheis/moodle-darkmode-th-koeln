console.log('[DarkMode] loading banner.js...');

// navbar
elem = document.getElementsByClassName("navbar")[0];
elem.style.backgroundColor = backgroundColorLight;
elem.style.color = textColor;

// language 
elem = document.getElementsByClassName("nav-link")[0];
elem.style.backgroundColor = backgroundColorLight;
elem.style.color = textColor;

/*
// menue icon
elem = document.getElementsByClassName('btn nav-link float-sm-left mr-1 btn-light bg-gray')[0]
elem.classList.remove('bg-gray');
elem.style.backgroundColor = backgroundColorLightest;
elem.style.color = textColor;
elem.style.border = '1px solid ' + borderColor;

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

// or no username
try {
  elem = document.getElementsByClassName('login')[0]
  elem.style.color = backgroundColor;
} catch (e) {}

// dropdownarrow
try {
  elem = document.getElementsByClassName('dropdown-toggle')[1]
  elem.style.color = backgroundColor;
} catch (e) {}

classesLight = [
  'popover-region-container',
  'popover-region-footer-container',
]
for (let i = 0; i < classesLight.length; i++) {
  elems = document.getElementsByClassName(classesLight[i]);
  for (let j = 0; j < elems.length; j++) {
    try {
      elems[j].style.backgroundColor = backgroundColorLight;
      elems[j].style.color = color;
    } catch (e) {}
  }
}
*/