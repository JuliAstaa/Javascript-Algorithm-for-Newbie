//mencari angka terbesar dari sebuah array
//contoh array
const arrayAngka = [1, 2, 4, 5, 7, 9, 0, 7, 5, 3, 8, 5, 7, 6, 12];

//spread operator
console.log(
  `Angka terbesar dari array ${arrayAngka} adalah ${Math.max(...arrayAngka)}`
);

//for loop
let terbesar = 0;

for (let i = 0; i < arrayAngka.length; i++) {
  if (arrayAngka[i] > terbesar) {
    terbesar = arrayAngka[i];
  }
}
console.log(`Angka terbesar dari array ${arrayAngka} adalah ${terbesar}`);

//reduce
const angkaTerbesar = arrayAngka.reduce((terbesar, angka) => {
  return angka > terbesar ? angka : terbesar;
}, arrayAngka[0]);

console.log(`Angka terbesar dari array ${arrayAngka} adalah ${angkaTerbesar}`);
