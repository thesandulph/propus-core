import {useRef, useEffect} from 'react';

const useEvent = (name, callback, target) => {
    const element = useRef(null);
    const handler = useRef(null);
    useEffect(() => {
        element.current = target ? target.current : window;
    }, [target]);
    useEffect(() => {
        handler.current = callback;
    }, [callback]);
    useEffect(() => {
        if (element && element.addEventListener) {
            const eventListener = event => handler.current(event);
            element.addEventListener(name, eventListener);
            return () => {
                element.removeEventListener(name, eventListener);
            };
        }
        return;
    }, [name, element]);
};
