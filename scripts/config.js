console.log('[DarkMode] loading config.js...');

const backgroundColor = '#181818';
const backgroundColorLight = '#282828';
const backgroundColorLightest = '#383838';
const textColor = 'white';
const borderColor = backgroundColorLightest;
const menueBorderColor = backgroundColor;

function addDefaultDesign(elem) {
  elem.style.backgroundColor = backgroundColor;
  elem.style.color = textColor;
}

function addDefaultDesignWithBorder(elem) {
  elem.style.backgroundColor = backgroundColor;
  elem.style.color = textColor;
  elem.style.border = '1px solid ' + borderColor;
}

function Sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}
