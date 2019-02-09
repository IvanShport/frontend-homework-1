'use strict';

const coll = new Intl.Collator();

function sort(someString) {
    return someString
        .toLowerCase()
        .split(' ')
        .map(localSort)
        .sort(coll.compare)
        .join(' ');
}

function localSort(word) {
    const sortWord = [...(word
        .toLowerCase())]
        .sort(coll.compare)
        .join('');

    return sortWord
            .charAt(0)
            .toUpperCase()
        + sortWord.slice(1);
}