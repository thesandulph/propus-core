import React, {
    createContext as createReactContext,
    useContext as useReactContext,
} from 'react';
import ContextDevTool from 'react-context-devtool';
import {camelCase} from '@nitropack/utility';

const makeProps = (context, key) => {
    const {state, setState} = context;
    const name = camelCase(`set${key}`);
    return {
        [key]: state,
        [name]: setState,
    };
};

const makeProvider = (Context, key, callback) => ({value, children, onChange = () => null}) => {
    const state = callback(value);
    const setState = next_value => onChange(next_value, key);
    return (
        <Context.Provider value={{state, setState}}>
            <ContextDevTool
                context={Context}
                id={key}
                displayName={key}
            />
            {children}
        </Context.Provider>
    );
};

const makeHook = (Context, key) => () => {
    const context = useReactContext(Context);
    return makeProps(context, key);
};

const makeConsumer = (Context, key) => Component => props => (
    <Context.Consumer>
        {context => (
            <Component
                {...props}
                {...makeProps(context, key)}
            />
        )}
    </Context.Consumer>
);

export const createContext = (key, callback) => {
    const Context = createReactContext(callback());
    return [
        makeProvider(Context, key, callback),
        makeHook(Context, key),
        makeConsumer(Context, key),
    ];
};
