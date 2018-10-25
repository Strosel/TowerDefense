class tower {


this.position = pos;
this.texture = tex;
const TILE_H = 15;
const TILE_W = 15;

var towerDragCounter = 0;
var towerPos = new Array();
var numTowers = 0;



function towerRange(towerID) {
switch (towerID) {
case "tower0":
return 3 * TILE_W;
case "tower1":
return 5 * TILE_W;
case "tower2":
return 10 * TILE_W;
  }
}

function towerClick(tower) {
  function tclick(evt) {
    if (!isRunning ){
      return;
    }

var x = 0;
var y = 0;

var towerD = document.createElement("div");
towerD.setAttribute("id", tower.id + ":" + towerDragCounter++);
towerD.setAttribute("class", "towerdrag");
towerD.style.left = x + "px";
towerD.style.top = y + "px";
towerD.style.backgroundColor = towerColor(tower.id);
towerD.setAttribute("draggable", "true");
listenEvent(towerD, "dragstart", towerDrag(towerD));
document.body.appendChild(towerD);




  }
  return tclick;




}


function dragOver(evt) {
  if (evt.preventDefault) evt.preventDefault();
  evt = evt || window.event;
  evt.dataTransfer.dropEffect = 'copy';
  return false;
}

function mapDrop(mapzone) {
  function drop(evt) {
    cancelPropogation(evt);
    evt = evt || window.event;
    evt.dataTransfer.dropEffect = 'copy';
    var id = evt.dataTransfer.getData("Text");
    var turret = document.getElementById(id);
    tower.style.left = mapzone.style.left;
    tower.style.top = mapzone.style.top;

    // get the drop coordinates
    var x = mapzone.style.left.replace(/\D/g, "");
    var y = mapzone.style.top.replace(/\D/g, "");

    // the id is up to the colon in the string
    var towerID = turret.id.substring(0, turret.id.indexOf(":"));

    // store an entry in the turret position array
    turretPos[numTurrets++] = new Array(turretRange(turretID), turretDamage(turretID), x, y);

    // once its droppable, you can't move it anymore
    turret.setAttribute("draggable", "false");
    listenEvent(turret, "dragstart", nodrag);
  }
  return drop;
}

function turretDrag(turret) {
  function drag(evt) {
    evt = evt || window.event;
    evt.dataTransfer.effectAllowed = 'copy';
    evt.dataTransfer.setData("Text", turret.id);
  }
  return drag;
}

}
