import {changeCase} from '@propus/utility';

export const createContextProps = (context, key) => {
    const {state, setState} = context;
    const name = changeCase('camel', ['set', key].join('-'));
    return {
        [key]: state,
        [name]: setState,
    };
};
