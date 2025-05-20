import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
    const move = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', move);
    return () => document.removeEventListener('mousemove', move);
    }, []);

    return (
    <div
        style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        width: '20px',
        height: '20px',
        backgroundColor: '#ed5b00',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 9999,
    }}
    />
    );
};

export default CustomCursor;
