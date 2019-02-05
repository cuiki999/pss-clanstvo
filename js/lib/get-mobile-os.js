"use strict";

var compUploadDiv = document.getElementById('comp-upload');
var phoneUploadDiv = document.getElementById('phone-upload'); // mostly copied from: https://stackoverflow.com/questions/21741841/detecting-ios-android-operating-system

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera; // Windows Phone must come first because its UA also contains "Android"

  if (/windows phone/i.test(userAgent)) {
    compUploadDiv.style.display = 'block';
    phoneUploadDiv.style.display = 'none';
  }

  if (/android/i.test(userAgent)) {
    compUploadDiv.style.display = 'none';
    phoneUploadDiv.style.display = 'block';
  } // iOS detection from: http://stackoverflow.com/a/9039885/177710


  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    compUploadDiv.style.display = 'none';
    phoneUploadDiv.style.display = 'block';
  } else {
    compUploadDiv.style.display = 'block';
    phoneUploadDiv.style.display = 'none';
    console.log('hey');
  }
}

getMobileOperatingSystem();