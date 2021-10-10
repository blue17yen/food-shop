import React from "react";

export const UserIcon = ({ color = "#151515", size = "24" }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 40 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M5 36.6667L6.31667 31.8667C10.6667 16.0334 29.3333 16.0334 33.6833 31.8667L35 36.6667'
                stroke={color}
                stroke-width='3.5'
                stroke-linecap='round'
                stroke-linejoin='round'
            />
            <path
                d='M20.0001 19.9667C24.6025 19.9667 28.3334 16.2358 28.3334 11.6334C28.3334 7.03101 24.6025 3.30005 20.0001 3.30005C15.3977 3.30005 11.6667 7.03101 11.6667 11.6334C11.6667 16.2358 15.3977 19.9667 20.0001 19.9667Z'
                stroke={color}
                stroke-width='3.5'
                stroke-linecap='round'
                stroke-linejoin='bevel'
            />
        </svg>
    );
};
