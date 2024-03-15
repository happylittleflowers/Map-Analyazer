// SOLUTIONS TO MAP ANALYZER LEVELS

// Global Variables that store row and column of tile that mouse is on

let row, column;
let tile = document.getElementById("currentTile");

// Solution Functions...
// Write your code here inside these functions

function level1Solution() {
  if (column <= 4) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "WATER";
  }
}

function level2Solution() {
  if (column >= 8) {
    tile.innerHTML = "WATER";
  } else if (column >= 3) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "HILLS";
  }
}
function level3Solution() {
  if (column >= 3 && column <= 7) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "HILLS";
  }
}

function level4Solution() {
  if (row >= 7) {
    tile.innerHTML = "SAND";
  } else if (row <= 2) {
    tile.innerHTML = "HILLS";
  }
}
function level5Solution() {
  if (row >= 6) {
    tile.innerHTML = "WATER";
  } else if (row >= 3) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "HILLS";
  }
}

function level6Solution() {
  if (row >= 2 && row <= 5) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "WATER";
  }
}

function level7Solution() {
  if (row == 4) {
    tile.innerHTML = "WATER";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level8Solution() {
  if (row == 5 || column == 2) {
    tile.innerHTML = "TREE";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level9Solution() {
  if (row >= 6 || column <= 11) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "WATER";
  }
}

function level10Solution() {
  if (row >= 8) {
    tile.innerHTML = "WATER";
  } else if (row >= 4) {
    tile.innerHTML = "SAND";
  } else if (row >= 2) {
    tile.innerHTML = "TREES";
  } else {
    tile.innerHTML = "HILLS";
  }
}

function level11Solution() {
  if (column >= 6) {
    tile.innerHTML = "HILLS";
  } else if (row >= 3) {
    tile.innerHTML = "WATER";
  } else if (row >= 7) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "TREES";
  }
}

function level12Solution() {
  if (column >= 4) {
    tile.innerHTML = "WATER";
  } else {
    tile.innerHTML = "SAND";
  }
}
function level13Solution() {
  if (column >= 11) {
    tile.innerHTML = "TREES";
  } else {
    tile.innerHTML = "SAND";
  }
}
function level14Solution() {
  if (column >= 5) {
    tile.innerHTML = "WATER";
  } else if (column >= 5) {
    tile.innerHTML = "TREES";
  } else {
    tile.innerHTML = "SAND";
  }
}
