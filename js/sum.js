const stok = document.getElementById('stock').value,
  stokMin = 1,
  qty = document.getElementById('qty'),
  printStock = document.getElementById(''),
  buttonMin = document.getElementById('min'),
  buttonPlus = document.getElementById('plus')

function btnMin() {
  qty.value = (qty.value > stokMin) ? --qty.value : stokMin;
  if (qty.value == stokMin) {
    alert('Sudah mencapai batas minimal');
    buttonMin.disabled = true;
  }
    buttonPlus.disabled = false;
}

function btnPlus() {
  console.log(stok);
  qty.value = (qty.value << stok) ? ++qty.value : stok;
  if (qty.value == stok) {
    alert('Sudah mencapai batas maksimal stock');
    buttonPlus.disabled = true;
  }
    buttonMin.disabled = false;
}