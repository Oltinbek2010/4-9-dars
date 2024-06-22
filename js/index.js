// Asosiy metodlarga oid masalalar

// 1-masala

// function massivningUzunliginiTop(arr) {
//     return arr.length;
// }

// console.log(massivningUzunliginiTop([1, 2, 3, 4, 5]));

// 2-masala

// function massivniStringgaAylantir(arr) {
//     return arr.toString();
// }

// console.log(massivniStringgaAylantir(typeof [1, 2, 3, 4, 5]));

// 3-masala

// function massivniElementlariniVergulBilanAjrat(arr) {
//     return arr.join(`,`);
// }

// console.log(massivniElementlariniVergulBilanAjrat([1, 2, 3, 4, 5]));

// 4-masala

// function oxirigaYangiElementQosh (arr, element) {
//     let result = arr.push(element);
//     return arr;
// }

// console.log(oxirigaYangiElementQosh([1, 2, 3, 4], 3));

// 5-masala

// function massivdaOxirgiElementniOchirish(arr) {
//     let result = arr.pop();
//     return arr;
// }

// console.log(massivdaOxirgiElementniOchirish([1, 2, 3, 4, 5]));

// 6-masala 

// function massivdaBirinchiElementniOchirish(arr) {
//     let result = arr.shift();
//     return arr;
// }

// console.log(massivdaBirinchiElementniOchirish([1, 2, 3, 4, 5]));

// 7-masala

// function boshigaYangiElementQosh (arr, element) {
//     let result = arr.unshift(element);
//     return arr;
// }

// console.log(boshigaYangiElementQosh([1, 2, 3, 4], 3));

// 8-masala

// function ikkiMassivniBirlashtir(arr, arr1) {
//     let newArr = arr.concat(arr1);
//     return newArr;
// }

// console.log(ikkiMassivniBirlashtir([1, 2, 3], [4, 5, 6]));

// 9-masala 

// function sliceOrqaliFunksiya(arr, index, nechtaElementOchirish, yangiElementlar) {
//     let result = arr.slice(index, nechtaElementOchirish, yangiElementlar);
//     return arr;
// }

// console.log(sliceOrqaliFunksiya([1, 2, 3, 4, 5], 0, 2, [1, 2]));

// 10-masala
// TUSHUNMADIM!!!

// 11-masala

// function stringniUzunliginiAniqla(string) {
//    let result = string.length;
//    return result;
// }
// console.log(stringniUzunliginiAniqla(`qwerty`));

// 12-masala

// function raqamliMassivniStringgaAylantir(arr) {
//     let result = arr.toString();
//     return result;
// }

// console.log(raqamliMassivniStringgaAylantir([1, 2, 3, 4, 5]));

// 13-masala

// function massivElementlariniBoshJoybilanBirlashtir(arr) {
//     return arr.join(` `);
// }

// console.log(massivElementlariniBoshJoybilanBirlashtir([1, 2, 3, 4, 5]));

// 14-masala

// function massivgaElementQosh(arr, yangiElement) {
//     let result = arr.push(yangiElement);
//     return arr;
// }
// console.log(massivgaElementQosh([1, 2, 3, 4], [5, 6]));

// 15-masala

// function oxirgiIkkitaElementniOchir(arr) {
//     arr.pop();
//     arr.pop();
//     return arr;
// }

// console.log(oxirgiIkkitaElementniOchir([1, 2, 3, 4, 5]));

// 16-masala

// function birrinchiIkkitaElementniOchir(arr) {
//     arr.shift();
//     arr.shift();
//     return arr;
// }

// console.log(birinchiIkkitaElementniOchir([1, 2, 3, 4, 5]));

// 17-masala

// function massivgaElementQosh(arr, yangiElement) {
//     let result = arr.unshift(yangiElement);
//     return arr;
// }
// console.log(massivgaElementQosh([1, 2, 3, 4], [5, 6]));

// 18-masala

// function uchtaMassivniBirlashtir(arr1, arr2, arr3) {
//     let newArray = arr1.concat(arr2, arr3);
//     return newArray;
// }

// console.log(uchtaMassivniBirlashtir([1, 2, 3], [4, 5, 6], [7, 8, 9]));

// 19-masala

// function massivdaBittaElementOchir(arr, index) {
//     let result = arr.slice(index, 1);
//     return arr;
// }

// console.log(massivdaBittaElementOchir([1, 2, 3, 4, 5], 3));

// 20-masala

// function sliceYordamidaFunksia(arr, index) {
//     let result = arr.slice(index, arr.length - 1);
//     return result;
// }
// console.log(sliceYordamidaFunksia([1, 2, 3, 4, 5] , 1));

// SEARCH METODLARIGA OID MASALALAR

// 1-masala

// function massivdaBerilganElementBorliginiTekshir(arr, element) {
//     let result = arr.includes(element);
//     return result;
// }

// console.log(massivdaBerilganElementBorliginiTekshir([1, 2, 3, 4, 5], 5));

// 2-masala

// function berilganElementniIndeksiniTop(arr, element) {
//     let result = arr.indexOf(element);
//     return result;
// }

// console.log(berilganElementniIndeksiniTop([1, 2, 3, 4, 5], 0));

// 3-masala

// function berilganElementniIndeksiniTop(arr, element) {
//     let result = arr.lastIndexOf(element);
//     return result;
// }
// console.log(berilganElementniIndeksiniTop([1, 2, 3, 4, 5], 0));

// 4-masala

// function findYordamida(arr, shart) {
//     let result = arr.find(function (value) {
//         return value == shart;
//     })
//      return result;
// }
// console.log(findYordamida([1, 2, 3, 4, 5], value > 5));

// 5-masala

// TUSHUNMADIM!!!

// 6-masala

// function massivdaBerilganElementBorliginiTekshir(arr, element) {
//     let result = arr.includes(element);
//     return result;
// }

// console.log(massivdaBerilganElementBorliginiTekshir([1, 2, 3, 4, 5], 5));

// 7-masala

// function berilganElementniIndeksiniTop(arr, element) {
//     let result = arr.indexOf(element);
//     return result;
// }

// console.log(berilganElementniIndeksiniTop([1, 2, 3, 4, 5], 0));

// 8-masala

// function berilganElementniIndeksiniTop(arr, element) {
//     let result = arr.lastIndexOf(element);
//     return result;
// }
// console.log(berilganElementniIndeksiniTop([1, 2, 3, 4, 5], 0));

// 9-masala

// function findYordamida(arr, shart) {
//     let result = arr.find(function (value) {
//         if (shart) {
//           return value;  
//         } 
//     })
// }
// console.log(findYordamida([1, 2, 3, 4, 5], value > 5));

// 10-masala
// TUSHUNMADIM!!!