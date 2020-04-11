import {useState, useEffect} from 'react';

const useCounter = (duration, interval = 1000, countup = false) => {
    let timer = null;
    const unit = countup ? interval : -interval;
    const [counter, setCounter] = useState(duration);
    useEffect(() => {
            if (counter) {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    const next = counter + unit;
                    setCounter(next > 0 ? next : 0);
                }, interval);
                return () => {
                    clearTimeout(timer);
                };
            }
        },
        [counter],
    );
    return [counter, setCounter];
};
