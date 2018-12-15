let upnRadio = document.getElementById('poloznica-option')
let paypalRadio = document.getElementById('paypal-option')

let upnDiv = document.getElementById('poloznica-frame')
let paypalDiv = document.getElementById('paypal-frame')

let displayADiv = (radio, ownDiv, otherDiv) => {
  radio.addEventListener('change', (event) => {
    if (event.target.checked) {
      ownDiv.style.display = 'block'
      otherDiv.style.display = 'none'
    }
  })

  // added so that the appropriate div remains displayed after refreshing the page
  if (radio.checked) {
    ownDiv.style.display = 'block'
  } else {
    ownDiv.style.display = 'none'
  }
}

displayADiv(upnRadio, upnDiv, paypalDiv)
displayADiv(paypalRadio, paypalDiv, upnDiv)
