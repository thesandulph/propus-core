import {toArray} from '@propus/utility';
import {useImageContext} from './context';
import {useTextContext} from '../text';

const createImageSet = (images) => {
    if (images.length > 1) {
        return images.map((item, index) => {
            const tag = index ? `${index + 1}x` : '';
            return [item, tag].join(' ').trim();
        }).join(', ');
    }
    return null;
};

export const makeImage = (source, webp, alt) => {
    const {text} = useTextContext();
    const {image} = useImageContext();
    const images = toArray(image.webp_support ? webp || source : source);
    if (images.length) {
        return {
            alt: text.format(alt),
            src: images[0],
            ...createImageSet(images),
        };
    }
    return null;
};
