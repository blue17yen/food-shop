import React from "react";

export const CheckIcon = ({ color = "#151515", size = "24" }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 40 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M8.5835 19.3999L15.9335 26.7333L31.4168 13.2666'
                stroke={color}
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};
