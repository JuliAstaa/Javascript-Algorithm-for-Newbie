//menghitung faktorial
let faktorial = 1;

const hitungFaktorial = (angka) => {
  for (let i = 1; i <= angka; i++) {
    faktorial *= i;
  }
  return faktorial;
};

console.log(hitungFaktorial(10));
