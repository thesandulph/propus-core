import {useMemo, useEffect} from 'react';

const useEvent = (name, callback, target) => {
    const element = useMemo(() => target ? target.current : window, [target]);
    useEffect(() => {
        if (element && element.addEventListener) {
            element.addEventListener(name, callback);
            return () => {
                element.removeEventListener(name, callback);
            };
        }
    }, [name, element]);
};
