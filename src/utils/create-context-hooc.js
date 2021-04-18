import React, {useContext} from 'react';
import {createContextProps} from './create-context-props';

export const createContextHooc = (Context, key) => () => {
    const context = useContext(Context);
    return createContextProps(context, key);
};
