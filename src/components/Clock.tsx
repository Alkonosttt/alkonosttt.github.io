import { useEffect, useState } from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date());
    const [showColon, setShowColon] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
            // show or hide the semicolon
            setShowColon((prev) => !prev);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // get the time from user's device
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');

    return (
        <div id="clock">
            {hours}
            <span className={showColon ? 'transparent' : 'visible'}>:</span>
            {minutes}
        </div>
    );
};

export default Clock;