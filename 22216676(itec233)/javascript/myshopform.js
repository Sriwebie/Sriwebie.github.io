function calculateTotal() {
  const isChecked = document.getElementById('item1').checked;
  const selectedService = document.querySelector('input[name="T-shirt"]:checked');
  const numOfPets = document.getElementById('noofpets').value;
  
  let totalPrice = 0;

  if (isChecked && selectedService) {
    const servicePrice = 17.99; // Changed to match HTML
    totalPrice = servicePrice * parseInt(numOfPets);
  }

  document.getElementById('totalPrice').innerText = `${totalPrice.toFixed(2)} $`;
}

document.getElementById('item1').addEventListener('change', calculateTotal);
document.getElementsByName('T-shirt').forEach(radio => {
  radio.addEventListener('change', calculateTotal);
});
document.getElementById('noofpets').addEventListener('change', calculateTotal);

function calculateTotal2() {
  const isChecked = document.getElementById('item2').checked;
  const selectedService = document.querySelector('input[name="Jeans"]:checked');
  const selectedDuration = document.getElementById('duration').value;
  
  let totalPrice2 = 0;

  if (isChecked && selectedService) {
    const servicePrice = 40; // Changed to match HTML
    totalPrice2 = servicePrice * parseInt(selectedDuration);
  }

  document.getElementById('totalPrice2').innerText = `${totalPrice2.toFixed(2)} $`;
}

document.getElementById('item2').addEventListener('change', calculateTotal2);
document.getElementsByName('Jeans').forEach(radio => {
  radio.addEventListener('change', calculateTotal2);
});
document.getElementById('duration').addEventListener('change', calculateTotal2);

function calculateTotal3() {
  const isChecked = document.getElementById('item3').checked;
  const selectedService = document.querySelector('input[name="Denim Jacket"]:checked');
  const selectedCombo = document.getElementById('combo').value;
  
  let totalPrice3 = 0;

  if (isChecked && selectedService) {
    const servicePrice = 55; // Changed to match HTML
    totalPrice3 = servicePrice * parseInt(selectedCombo);
  }

  document.getElementById('totalPrice3').innerText = `${totalPrice3.toFixed(2)} $`;
}

document.getElementById('item3').addEventListener('change', calculateTotal3);
document.getElementsByName('Denim Jacket').forEach(radio => {
  radio.addEventListener('change', calculateTotal3);
});
document.getElementById('combo').addEventListener('change', calculateTotal3);

function calculateTotal4() {
  const isChecked = document.getElementById('item4').checked;
  const selectedService = document.querySelector('input[name="Sweater"]:checked');
  const selectedConsult = document.getElementById('consult').value;
  
  let totalPrice4 = 0;

  if (isChecked && selectedService) {
    const servicePrice = 27; // Changed to match HTML
    totalPrice4 = servicePrice * parseInt(selectedConsult);
  }

  document.getElementById('totalPrice4').innerText = `${totalPrice4.toFixed(2)} $`;
}

document.getElementById('item4').addEventListener('change', calculateTotal4);
document.getElementsByName('Sweater').forEach(radio => {
  radio.addEventListener('change', calculateTotal4);
});
document.getElementById('consult').addEventListener('change', calculateTotal4);

function verifydata() {
  const totalPrice1 = parseFloat(document.getElementById('totalPrice').innerText.replace(' $', '')) || 0;
  const totalPrice2 = parseFloat(document.getElementById('totalPrice2').innerText.replace(' $', '')) || 0;
  const totalPrice3 = parseFloat(document.getElementById('totalPrice3').innerText.replace(' $', '')) || 0;
  const totalPrice4 = parseFloat(document.getElementById('totalPrice4').innerText.replace(' $', '')) || 0;

  const subtotal = totalPrice1 + totalPrice2 + totalPrice3 + totalPrice4;

  let finalTotal;
  if (subtotal < 200) {
    finalTotal = subtotal * 1.15; // 15% tax if under $200
  } else {
    finalTotal = subtotal * 0.85; // 15% discount if $200 or more
  }

  const confirmPayment = confirm(`The total cost is ${finalTotal.toFixed(2)} $. Do you accept this amount for payment?`);
  
  if (confirmPayment) {
    alert('Thank you! Your payment is accepted.');
  } else {
    alert('Application withdrawal. Please check your selections again.');
  }

  document.getElementById('CALCULATE').innerText = `${finalTotal.toFixed(2)} $`;
}