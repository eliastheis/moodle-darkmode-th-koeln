console.log('[DarkMode] loading report_filehash.js...');

elems = document.getElementsByTagName('th');
for (let i = 0; i < elems.length; i++) {
  elems[i].style.color = textColor;
}

elems = document.getElementsByTagName('pre');
for (let i = 0; i < elems.length; i++) {
  elems[i].style.color = textColor;
}

elems = document.getElementsByTagName('td');
for (let i = 0; i < elems.length; i++) {
  elems[i].style.color = textColor;
}

finished = false;
index = 0;
while (!finished) {
  try {
    elem = document.getElementById("flexible-table_r" + index);
    if (index%2 == 1) {
      elem.style.backgroundColor = backgroundColor;
    } else {
      elem.style.backgroundColor = backgroundColorLight;
    }
    index++;
  } catch (e) {
    console.log(index);
    console.log(e);
    finished = true;
  }
}