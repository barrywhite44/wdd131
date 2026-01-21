// These are your static values (for now). Match them with what’s shown on your page.
const temperature = 7;       // Temperature in °C
const windSpeed = 12;        // Wind speed in km/h

// This function calculates the wind chill using the METRIC formula
function calculateWindChill(tempC, speedKmh) {
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(speedKmh, 0.16) +
    0.3965 * tempC * Math.pow(speedKmh, 0.16)
  ).toFixed(1); // Round result to 1 decimal place
}

// This function decides whether to show wind chill or "N/A"
function displayWindChill() {
  const windChillElement = document.getElementById("windChill");

  // Check if it meets the conditions
  if (temperature <= 10 && windSpeed > 4.8) {
    const chill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${chill} °C`;
  } else {
    windChillElement.textContent = "N/A";
  }
}

// Run this when the page is done loading
window.addEventListener("load", displayWindChill);

let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;
