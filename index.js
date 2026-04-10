const cls = document.querySelector('#celsius');
const fah = document.querySelector('#fahrenheit');
const kel = document.querySelector('#kelvin');

function calcTemp(event){
  const currValue = +event.target.value;

  switch(event.target.name){
    case "celsius":
      fah.value = ((1.8 * currValue) + 32).toFixed(2);
      kel.value = (currValue + 273.32).toFixed(2);
      break;s

    case "fahrenheit":
      cls.value = ((currValue-32) / 1.8).toFixed(2);
      kel.value = (((currValue-32) / 1.8) + 273.32).toFixed(2);
      break;


    case "kelvin":
      cls.value = (currValue - 273.32).toFixed(2);
      fah.value = ((currValue - 273.32) * 1.8 + 32).toFixed(2);
      break;
    default:
      break;
  }



}
