import React from "react";

export const BasketIcon = ({ color = "#151515", size = "24" }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 40 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M29.8163 34.75H10.183C9.65352 34.7505 9.13918 34.5734 8.72222 34.2471C8.30526 33.9208 8.00977 33.4641 7.88299 32.95L3.46632 15.2667C3.42323 15.0945 3.41997 14.9148 3.4568 14.7412C3.49363 14.5676 3.56958 14.4047 3.67886 14.2649C3.78815 14.125 3.92789 14.012 4.08745 13.9343C4.24702 13.8567 4.4222 13.8164 4.59966 13.8167H35.3997C35.5771 13.8164 35.7523 13.8567 35.9119 13.9343C36.0714 14.012 36.2112 14.125 36.3205 14.2649C36.4297 14.4047 36.5057 14.5676 36.5425 14.7412C36.5793 14.9148 36.5761 15.0945 36.533 15.2667L32.1163 32.95C31.9896 33.4641 31.6941 33.9208 31.2771 34.2471C30.8601 34.5734 30.3458 34.7505 29.8163 34.75V34.75Z'
                stroke={color}
                strokeWidth='3.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M16.3328 5.25L11.4995 13.8167'
                stroke={color}
                strokeWidth='3.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M23.1333 5.25L27.9833 13.8167'
                stroke={color}
                strokeWidth='3.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};
