"use strict";

var upnRadio = document.getElementById('poloznica-option');
var paypalRadio = document.getElementById('paypal-option');
var upnDiv = document.getElementById('poloznica-frame');
var paypalDiv = document.getElementById('paypal-frame');

var displayADiv = function displayADiv(radio, ownDiv, otherDiv) {
  radio.addEventListener('change', function (event) {
    if (event.target.checked) {
      ownDiv.style.display = 'block';
      otherDiv.style.display = 'none';
    }
  }); // added so that the appropriate div remains displayed after refreshing the page

  if (radio.checked) {
    ownDiv.style.display = 'block';
  } else {
    ownDiv.style.display = 'none';
  }
};

displayADiv(upnRadio, upnDiv, paypalDiv);
displayADiv(paypalRadio, paypalDiv, upnDiv);