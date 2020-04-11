import {createContext} from '../context';

const callback = ({format = (value => value), currency = (value => value)} = {}) => ({format, currency});

export const [
    TextProvider,
    useTextContext,
    withText,
] = createContext('text', callback);
