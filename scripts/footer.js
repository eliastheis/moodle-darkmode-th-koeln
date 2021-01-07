console.log('[DarkMode] loading footer.js...');

classes = [
  'bg-dark',
  'footnote',
  'text-light'
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

