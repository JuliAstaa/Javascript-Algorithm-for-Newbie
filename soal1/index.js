//Menghitung persegi panjang
const panjang = 8;
const lebar = 9;
const luasPersegi = panjang * lebar;
console.log(`Luas dari persegi panjang tersebut adalah ${luasPersegi}`);

//menghitung luas persegi panjang menggunakan sebuah function
const hitungLuasPersegi = (panjang, lebar) => {
  const hasil = panjang * lebar;
  return `Luas persegi dengan panjang ${panjang}, dan lebar ${lebar} adalah ${hasil}`;
};

console.log(hitungLuasPersegi(panjang, lebar));
