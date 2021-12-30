const dollars = document.querySelector('.dollars');
const priceRange = document.querySelector('#priceRange');

priceRange.addEventListener('input', () => {
  dollars.textContent = (priceRange.value/100).toFixed(2);
});
