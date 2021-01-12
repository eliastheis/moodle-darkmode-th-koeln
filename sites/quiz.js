console.log('[DarkMode] loading quiz.js...');

/* ### general elements ###*/

classes = [
  'card',
  'has-blocks',
  'card-body',
  'section'
]
// body
document.body.style.backgroundColor = backgroundColor;
document.body.style.color = textColor;

// region-main
elem = document.getElementById('region-main');
elem.style.background = backgroundColor;
elem.style.color = textColor;
elem.style.borderColor = borderColor;

// classes
for (let i = 0; i < classes.length; i++) {
  elems = document.getElementsByClassName(classes[i]);
  for (let j = 0; j < elems.length; j++) {
    try {
      if (classes[i] == 'bg-dark'){
        elems[j].classList.remove('bg-dark');
      }
      if (classes[i] == 'text-light'){
        elems[j].classList.remove('text-light');
      }
      elems[j].style.backgroundColor = backgroundColor;
      elems[j].style.color = textColor;
      elems[j].style.borderColor = borderColor;
    } catch (e) {}
    

  }
}

// generalbox
elems = document.getElementsByClassName('generalbox');
for (let j = 0; j < elems.length; j++) {
  try {
    elems[j].style.backgroundColor = backgroundColor;
    elems[j].style.color = textColor;
  } catch (e) {}
}
/* ### general elements ###*/


// info-box
elems = document.getElementsByClassName("info");
for (let i = 0; i < elems.length; i++) {
	addDefaultDesign(elems[i]);
}

// tables (tbody)
elems = document.getElementsByTagName('tbody');
  for (let j = 0; j < elems.length; j++) {
  try {
    elems[j].style.border = "none";
  } catch (e) {}
}

// SHOW PAGE
document.body.style.setProperty ('display', 'inherit', 'important');