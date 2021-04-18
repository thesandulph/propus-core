import React, {useMemo} from 'react';
import {ContextDevTool} from 'react-context-devtool';

export const createContextProvider = (Context, key, callback) => ({value, children, onChange = () => null}) => {
    const state = useMemo(callback(value), [callback, value]);
    const setState = useMemo(() => next_value => onChange(next_value, key), [onChange, key]);
    return (
        <Context.Provider value={{state, setState}}>
            <ContextDevTool
                id={key}
                displayName={key}
                context={Context}
            />
            {children}
        </Context.Provider>
    );
};
