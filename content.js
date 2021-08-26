const LRUCache = require('lru-cache');
const maxAge = process.env.MAX_AGE;
const maxSize = process.env.MAX_SIZE;

class Cache {
    constructor() {
        this.instance = null;
    };
    static getInstance() {
        if (!Cache.instance) {
            Cache.instance = new LRUCache({ maxAge: parseInt(maxAge) || 900000, max: parseInt(maxSize) || 100 });
        }
        return this.instance;
    }
}

exports.cache = Cache.getInstance();
