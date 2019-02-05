'use strict';

const comp = (a, b) => {
    let coll = new Intl.Collator();
    return coll.compare(a, b);
};

const localSort = word => {
    return word
        .toLowerCase()
        .split('')
        .sort(comp)
        .join('');
};

function sort(someString) {
    return someString
        .toLowerCase()
        .split(' ')
        .map(localSort)
        .map(word => word[0].toUpperCase() + word.slice(1))
        .sort(comp)
        .join(' ');
}

console.log(sort("маМа мЫлА раму"));
console.log(sort('космиЧеский КорАБль летит на мАрС'));
console.log(sort('i LOve FroNteNd'));
console.log(sort('Hello woRLD'));