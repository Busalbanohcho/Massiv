
const arr = [1, 2, 2, 3, 1, 2, 4, 5, 4, 2, 6];
const arr1 = Array.from(new Set(arr))
console.log(arr1);


const r = [1, 2, 2, 3, 1, 2, 4, 5, 4, 2, 6];
const r1 = new Set(r)
const r2 = Array.from(r1)
console.log(r2);

