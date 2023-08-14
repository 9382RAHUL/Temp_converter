function tempcon() {
  let celc = document.getElementById("celcius");

  let celcfloat = parseFloat(celc.value);

  let farefl = (9 * celcfloat) / 5 + 32;

  if (isNaN(celcfloat)) {
    alert("Please enter a valid number");
  } else {
    return (document.getElementById("demo").innerHTML = farefl + "°F");
  }
}
