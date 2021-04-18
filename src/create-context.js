import React, {createContext as createReactContext} from 'react';
import {
    createContextHoc,
    createContextHooc,
    createContextProvider,
} from './utils';

export const createContext = (key, callback) => {
    const Context = createReactContext(callback());
    return [
        createContextProvider(Context, key, callback),
        createContextHoc(Context, key),
        createContextHooc(Context, key),
    ];
};
