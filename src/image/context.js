import {
    createContext,
    isValued,
} from '@reatc/utility';

const callback = (value) => {
    let support_webp = false;
    if (value) {
        support_webp = value.indexOf('image/webp') > -1;
    }
    if (!support_webp) {
        if (isValued(document)) {
            const canvas = document.createElement('canvas');
            if (canvas.getContext && canvas.getContext('2d')) {
                support_webp = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
            }
        }
    }
    return {support_webp};
};

export const [
    ImageProvider,
    useImageContext,
    withImage,
] = createContext('image', callback);
