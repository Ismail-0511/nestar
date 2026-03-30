// TASK ZJ:

// Shunday function yozing, u berilgan array ichidagi
// raqamlarni qiymatini hisoblab qaytarsin.

// MASALAN: reduceNestedArray([1, [1, 2, [4]]]); return 8;

// Yuqoridagi misolda, array nested bo'lgan holdatda ham,
// bizning function ularning yig'indisini hisoblab qaytarmoqda

function reduceNestedArray(arr: any[]): number {
    return arr.reduce((sum, item) => {
        return sum + (Array.isArray(item) ? reduceNestedArray(item) : (Number(item) || 0));
    }, 0);
}

console.log(reduceNestedArray([1, [1, 2, [4]]])); 
console.log(reduceNestedArray([10, [20, [30]], 40])); 
