import React from 'react';

export const Plus = ({ color = "#151515", size = "16" }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 17 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M14.1608 8H3.49414'
                stroke={color}
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='bevel'
            />
            <path
                d='M8.82812 13.3334V2.66676'
                stroke={color}
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='bevel'
            />
        </svg>
    );
};