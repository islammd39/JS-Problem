const myInput = document.getElementById('userName')
const item1 = document.getElementById('item-1')
const item2 = document.getElementById('item-2')
const item3 = document.getElementById('item-3')

myInput.addEventListener('input', (e) => {
  // console.log(e.target.value);
  // var pattern = /^[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\d]*$/g;
  // var specialChars = /[^a-zA-Z ]/g;

  let setValue = e.target.value
  // console.log(setValue);
  if (setValue === '') {
    item1.style.color = 'red'
    item2.style.color = 'red'
    item3.style.color = 'red'

  } else if (setValue.toLowerCase() === setValue) {
    item1.style.color = 'green'
    item2.style.color = 'yellow'
    item3.style.color = 'yellow'
  } else if (setValue.toUpperCase() === setValue) {
    item1.style.color = 'yellow'
    item2.style.color = 'green'
    item3.style.color = 'yellow'
  } else {
    item1.style.color = 'black'
    item2.style.color = 'black'
    item3.style.color = 'black'
  }

})