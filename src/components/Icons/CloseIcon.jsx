import React from "react";

export const CloseIcon = ({ color = "#151515", size = "24" }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 40 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M30.5997 30.5999L9.39966 9.3999'
                stroke={color}
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='bevel'
            />
            <path
                d='M30.5997 9.3999L9.39966 30.5999'
                stroke={color}
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='bevel'
            />
        </svg>
    );
};
