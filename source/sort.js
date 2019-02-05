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
