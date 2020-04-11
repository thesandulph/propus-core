import {toArray} from '@propus/utility';

export const makeKeywords = (keywords, callback) =>
    toArray(keywords).map(callback).join(', ');
