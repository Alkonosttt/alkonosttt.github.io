import React, { useEffect, useRef } from 'react';

interface SvgCarouselProps {
    width: number;
    icons: string[];
}

const SvgCarousel: React.FC<SvgCarouselProps> = ({ width, icons }) => {
    const carouselRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
    let scrollAmount = 0;
    const carousel = carouselRef.current;

    const scroll = () => {
        if (carousel) {
        scrollAmount += 1;
        if (scrollAmount >= carousel.scrollWidth / 2) {
        scrollAmount = 0;
        }
        carousel.scrollLeft = scrollAmount;
        }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
    }, []);

  // Duplicate icons to simulate infinite scrolling
    const allIcons = [...icons, ...icons];

    return (
    <div
        ref={carouselRef}
        style={{
        width: `${width}px`,
        overflow: 'hidden',
        display: 'flex',
        flexWrap: 'nowrap',
        whiteSpace: 'nowrap',
        alignItems: 'center',
        gap: '20px',
    }}
    >
        {allIcons.map((icon, i) => (
        <img
        key={i}
        src={`/images/technologies/${icon}`}
        alt={icon}
        style={{ height: '50px', width: 'auto' }}
        />
    ))}
    </div>
);
};

export default SvgCarousel;
