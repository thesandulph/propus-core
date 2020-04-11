import {hasValue} from '@propus/utility';
import {createContext} from '../context';

const callback = (value) => {
    let webp_support = false;
    if (value) {
        webp_support = value.indexOf('image/webp') > -1;
    }
    if (!webp_support && hasValue(document)) {
        const canvas = document.createElement('canvas');
        if (canvas.getContext && canvas.getContext('2d')) {
            webp_support = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
        }
    }
    return {webp_support};
};

export const [
    ImageProvider,
    useImageContext,
    withImage,
] = createContext('image', callback);
