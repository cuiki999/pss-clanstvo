"use strict";

var localMain = document.getElementById('lokalno-main');
var localSmall = document.querySelectorAll('.local-small');
var nationalMain = document.getElementById('nacionalno-main');
var nationalSmall = document.querySelectorAll('.national-small');

var updateCheckboxes = function updateCheckboxes(bigBox, smallBox) {
  smallBox.addEventListener('change', function (event) {
    if (event.target.checked) {
      var checkBig = function checkBig() {
        bigBox.checked = true;
      };

      checkBig();
    }
  });
  bigBox.addEventListener('change', function (event) {
    if (!event.target.checked) {
      var uncheckSmall = function uncheckSmall() {
        smallBox.checked = false;
      };

      uncheckSmall();
    }
  });
};

var loopThroughBoxes = function loopThroughBoxes() {
  for (var i = 0; i < localSmall.length; i++) {
    updateCheckboxes(localMain, localSmall[i]);
  }

  ;

  for (var j = 0; j < nationalSmall.length; j++) {
    updateCheckboxes(nationalMain, nationalSmall[j]);
  }

  ;
};

loopThroughBoxes();