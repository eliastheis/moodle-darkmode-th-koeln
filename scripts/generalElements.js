async function generalElements() {
  console.log('[DarkMode] loading generalElements.js...');

  classes = [
    'card',
    'has-blocks',
    'card-body',
    'section',
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
        if (classes[i] == 'bg-dark') {
          elems[j].classList.remove('bg-dark');
        }
        if (classes[i] == 'text-light') {
          elems[j].classList.remove('text-light');
        }
        elems[j].style.backgroundColor = backgroundColor;
        elems[j].style.color = textColor;
        elems[j].style.borderColor = borderColor;
      } catch (e) {}
    }
  }

  // text fields
  elems = document.getElementsByTagName('input')
  for (let i = 0; i < elems.length; i++) {
    elems[i].style.backgroundColor = backgroundColorLight;
    elems[i].style.color = textColor;
  }

  // selects
  elems = document.getElementsByTagName('select')
  for (let i = 0; i < elems.length; i++) {
    elems[i].style.backgroundColor = backgroundColorLight;
    elems[i].style.color = textColor;
  }

  // scroll up button
  try {
    elem = document.querySelectorAll('[role="button"]')[13]
    elem.style.backgroundColor = backgroundColor;
    elem.style.color = textColor;
  } catch (e) {}

  // buttons
  elems = document.getElementsByClassName('btn-secondary');
  for (let j = 0; j < elems.length; j++) {
    try {
      elems[j].style.backgroundColor = backgroundColorLightest;
      elems[j].style.color = textColor;
      elems[j].style.borderColor = menueBorderColor;
    } catch (e) {}
  }

  // dropdown-menu
  elems = document.getElementsByClassName('dropdown-menu');
  for (let j = 0; j < elems.length; j++) {
    try {
      elems[j].style.backgroundColor = backgroundColorLightest;
      elems[j].style.color = textColor;
      elems[j].style.borderColor = menueBorderColor;
    } catch (e) {}
  }
  elems = document.getElementsByClassName('dropdown-item');
  for (let j = 0; j < elems.length; j++) {
    try {
      elems[j].style.backgroundColor = backgroundColorLightest;
      elems[j].style.color = textColor;
      elems[j].style.borderColor = menueBorderColor;
    } catch (e) {}
  }

  // tables
  elems = document.querySelectorAll('[border="1"]')
  for (let j = 0; j < elems.length; j++) {
    try {
      elems[j].style.border = '1px solid ' + textColor;
    } catch (e) {}
  }

  // tables (generaltable)
  elems = document.getElementsByClassName('generaltable');
  for (let j = 0; j < elems.length; j++) {
    try {
      addDefaultDesign(elems[j])
    } catch (e) {}
  }

/*
  // tables (tbody)
  elems = document.getElementsByTagName('tbody');
  for (let j = 0; j < elems.length; j++) {
    try {
      elems[j].style.border = '1px solid ' + textColor;
    } catch (e) {}
  }*/

  // generalbox
  elems = document.getElementsByClassName('generalbox');
  for (let j = 0; j < elems.length; j++) {
    try {
      elems[j].style.backgroundColor = backgroundColor;
      elems[j].style.color = textColor;
    } catch (e) {}
  }

  // legend
  elems = document.getElementsByClassName('legend');
  for (let j = 0; j < elems.length; j++) {
    try {
      elems[j].style.backgroundColor = backgroundColor;
      elems[j].style.color = textColor;
    } catch (e) {}
  }

  // logout popup
  while (true) {
    try {
      await sleep(5);
      elem = document.getElementsByClassName('modal-content')[0];
      elem.style.backgroundColor = backgroundColorLight;
      elem.style.color = textColor;
    } catch (e) {}
  }
}

generalElements()
