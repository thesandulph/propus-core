import {camelCase} from '@propus/utility';

export const createContextProps = (context, key) => {
    const {state, setState} = context;
    const name = camelCase(`set${key}`);
    return {
        [key]: state,
        [name]: setState,
    };
};
