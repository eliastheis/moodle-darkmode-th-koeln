console.log('[DarkMode] loading footer.js...');

classes = [
  'bg-dark',
  'footnote',
  'text-light',
  // 'homelink',
  // 'policiesfooter',
]

// classes
for (let i = 0; i < classes.length; i++) {
  elems = document.getElementsByClassName(classes[i]);
  for (let j = 0; j < elems.length; j++) {
    try {

      elems[j].classList.remove('bg-dark');
      elems[j].classList.remove('text-light');

      elems[j].style.backgroundColor = backgroundColorLight;
      elems[j].style.color = textColor;
      elems[j].style.borderColor = borderColor;
    } catch (e) {}
  }
}

elem = document.getElementById('page-footer');
elem.style.backgroundColor = backgroundColorLight;
elem.style.color = textColor;

try {
  document.getElementsByClassName('homelink')[0].childNodes[0].style = "color: white!important;";
} catch(e) {}
try {
  document.getElementsByClassName('policiesfooter')[0].childNodes[0].style = "color: white!important;";
} catch(e) {}



elem = document.getElementsByClassName('text_to_html')[0];
node = document.createTextNode(' | ');
a = document.createElement('a')
a.href = 'https://www.buymeacoffee.com/eliastheis'
a.target = '_blank'
img = document.createElement('img')
img.src = 'https://cdn.buymeacoffee.com/buttons/v2/default-blue.png'
img.alt = 'Buy Me A Beer'
img.style = 'height: 40px !important;width: 145px !important;'
a.appendChild(img)
elem.appendChild(node);
elem.appendChild(a);
