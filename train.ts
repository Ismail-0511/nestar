// TASK-ZK:

// Shunday function yozing, u har soniyada bir marta consolega 1 dan 5 gacha bolgan raqamlarni chop etsin va 5 soniyadan keyin ishini toxtatsin.
// MASALAN: printNumbers()

function printNumbers(): void {
  let count = 1;

  const intervalId = setInterval(() => {
    console.log(count);

    if (count === 5) {
      clearInterval(intervalId);
    }

    count++;
  }, 1000);
}

printNumbers();



// TASK ZJ:

// Shunday function yozing, u berilgan array ichidagi
// raqamlarni qiymatini hisoblab qaytarsin.

// MASALAN: reduceNestedArray([1, [1, 2, [4]]]); return 8;

// Yuqoridagi misolda, array nested bo'lgan holdatda ham,
// bizning function ularning yig'indisini hisoblab qaytarmoqda

// function reduceNestedArray(arr: any[]): number {
//     return arr.reduce((sum, item) => {
//         return sum + (Array.isArray(item) ? reduceNestedArray(item) : (Number(item) || 0));
//     }, 0);
// }

// console.log(reduceNestedArray([1, [1, 2, [4]]])); 
// console.log(reduceNestedArray([10, [20, [30]], 40])); 
