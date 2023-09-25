//Menentunkan bilangan prima
let bilangan = 11;

const cekBilanganPrima = (bilangan) => {
  if (bilangan <= 1) return false;
  for (let i = 2; i <= Math.sqrt(bilangan); i++) {
    if (bilangan % i === 0) return false;
  }
  return true;
};

if (cekBilanganPrima(bilangan)) {
  console.log(`${bilangan} adalah bilangan prima`);
} else {
  console.log(`${bilangan} bukan bilangan prima`);
}
