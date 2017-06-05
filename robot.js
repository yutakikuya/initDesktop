var robot = require("robotjs");

// Speed up the mouse.
robot.setMouseDelay(1);
var screenSize = robot.getScreenSize();

function missionControlPreprocess(){
  const iconPos = {width:120, height:865};
  robot.moveMouse(iconPos.width, iconPos.height);
  robot.mouseClick();

  var height = 30
  var width = 30
  for (var x = 0, y = 0;
       x < width;
       x++, y++)
  {
      robot.moveMouse(x, y);
  }
}

function disktopAddButtonClick() {
  missionControlPreprocess();
  const iconPos = {width:1405, height:30};
  robot.moveMouse(iconPos.width, iconPos.height);
  robot.mouseClick();
  robot.moveMouse(800, 1);
  robot.mouseClick();
}

function firstDisplayClick() {
  missionControlPreprocess();
  const iconPos = {width:625, height:50};
  robot.moveMouse(iconPos.width, iconPos.height);
  sleep(800);
  robot.mouseClick();
}

function secondDisplayClick() {
  missionControlPreprocess();
  const iconPos = {width:800, height:50};
  robot.moveMouse(iconPos.width, iconPos.height);
  sleep(800);
  robot.mouseClick();
}

function thirdDisplayClick() {
  missionControlPreprocess();
  const iconPos = {width:1000, height:50};
  robot.moveMouse(iconPos.width, iconPos.height);
  sleep(800);
  robot.mouseClick();
}

function atomClick() {
  const iconPos = {width:165, height:865};
  robot.moveMouse(iconPos.width, iconPos.height);
  robot.mouseClick();
}

function terminalClick() {
  const iconPos = {width:215, height:865};
  robot.moveMouse(iconPos.width, iconPos.height);
  robot.mouseClick();
}

function googleChromeClick() {
  const iconPos = {width:265, height:865};
  robot.moveMouse(iconPos.width, iconPos.height);
  robot.mouseClick();
}

function sleep(milisec) {
  const d1 = new Date();
  while (true) {
    const d2 = new Date();
    if (d2 - d1 > milisec) {
      break;
      }
  }
}


disktopAddButtonClick();
sleep(1500);
disktopAddButtonClick();
sleep(1500);
firstDisplayClick();
sleep(1000);
terminalClick();
sleep(1000);
secondDisplayClick();
sleep(1000);
atomClick();
sleep(1500);
thirdDisplayClick();
sleep(1000);
googleChromeClick();
