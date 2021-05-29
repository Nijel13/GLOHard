let num = 266219;
let mult = 1;
console.log(typeof(num));
let res = String(num);
res = res.split('');
console.log("массив чисел исходного числа = " + res);
for (let i = 0; i<res.length; i++){
    mult = mult * res[i];
}
console.log("умножение чисел = " + mult);
mult = mult**3;
console.log("возведение числа в 3 степень = " + mult);
console.log("первые 2 числа = " + String(mult).slice(0,2));