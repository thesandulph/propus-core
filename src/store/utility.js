import {connect as reduxConnect} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {isFunction} from '@propus/utility';

class ReduxFactory {
    static actions = null;
}

export const combineActions = (actions) => {
    ReduxFactory.actions = actions;
};

export const connect = (mapStateToProps, mapDispatchToProps) => {
    let newMapDispatchToProps = mapDispatchToProps;
    if (isFunction(mapDispatchToProps)) {
        newMapDispatchToProps = (dispatch, props) => mapDispatchToProps(ReduxFactory.actions, dispatch, props)
    }
    return reduxConnect(mapStateToProps, newMapDispatchToProps);
};

export const devTools = (debuggable) => {
    if (debuggable) {
        return composeWithDevTools(enhancers)
    }
    return enhancers;
};
