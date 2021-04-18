import React from 'react';
import {createContextProps} from './create-context-props';

export const createContextHoc = (Context, key) => Component => props => (
    <Context.Consumer>
        {context => (
            <Component
                {...props}
                {...createContextProps(context, key)}
            />
        )}
    </Context.Consumer>
);
