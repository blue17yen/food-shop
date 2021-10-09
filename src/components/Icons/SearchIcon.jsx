import React from "react";

export const SearchIcon = ({ color = "#151515", size = "24" }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M9.19352 11.4333C11.7709 11.4333 13.8602 9.34392 13.8602 6.7666C13.8602 4.18927 11.7709 2.09993 9.19352 2.09993C6.61619 2.09993 4.52686 4.18927 4.52686 6.7666C4.52686 9.34392 6.61619 11.4333 9.19352 11.4333Z'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='bevel'
            />
            <path
                d='M5.81368 10.24L2.68701 13.3667'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='bevel'
            />
        </svg>
    );
};
