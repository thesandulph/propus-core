import {toCurrency} from '@propus/utility';
import {createContext} from '../context';

const callback = ({
    format = (value => value),
    currency = toCurrency
} = {}) => ({format, currency});

export const [
    TextProvider,
    withText,
    useTextContext,
] = createContext('text', callback);
