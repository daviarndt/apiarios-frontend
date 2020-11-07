import React from 'react';
import lru from 'lru-cache';

const cache = new lru({
    maxAge: 300000,
    max: 500000000000,
    length: (n) => {
        return n.length * 100;
    }
});

export default class Cache extends React.Component {

    set(key, value) {
        cache.set(key, value);
    };

    get(key) {
        return cache.get(key);
    };
}