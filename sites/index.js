
async function dark_mode() {

  console.log('[DarkMode] loading main.js...');

  classes = [
    'card',
    'card-body',
    'block',
    'generaltable',
  ]
  
  ids = [
    'region-main',
  ]

  classes_light = [
    'drawer',
    'header-container',
    'view-overview-body',
    'modal-content',
  ]

  ids_lightest = [
    'view-overview-favourites-toggle',
    'view-overview-group-messages-toggle',
    'view-overview-messages-toggle',
  ]


  // body
  document.body.style.backgroundColor = backgroundColor;
  document.body.style.color = textColor;

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

  // classes light
  for (let i = 0; i < classes_light.length; i++) {
    elems = document.getElementsByClassName(classes_light[i]);
    for (let j = 0; j < elems.length; j++) {
      try {
        elems[j].style.backgroundColor = backgroundColorLight;
        elems[j].style.color = textColor;
      } catch (e) {}
    }
  }

  // IDs lightest
  for (let i = 0; i < ids_lightest.length; i++) {
    document.getElementById(ids_lightest[i]).style.backgroundColor = backgroundColorLightest;
    document.getElementById(ids_lightest[i]).style.color = textColor;
  }

  // IDs
  for (let i = 0; i < ids.length; i++) {
    document.getElementById(ids[i]).style.backgroundColor = backgroundColor;
    document.getElementById(ids[i]).style.color = textColor;
    document.getElementById(ids[i]).style.borderColor = borderColor;
  }

  // search button
  elem = document.getElementsByClassName('btn')[1]
  elem.style.backgroundColor = backgroundColorLightest;
  elem.style.color = textColor;

}

dark_mode();