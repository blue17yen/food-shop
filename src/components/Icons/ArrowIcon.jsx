import React from 'react';

export const Arrowdown = ({color = '#151515', size = '22'}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 40 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M12.0332 16.3335L18.8832 23.1835C19.1955 23.4939 19.6179 23.6681 20.0582 23.6681C20.4985 23.6681 20.9209 23.4939 21.2332 23.1835L27.8999 16.5168'
                stroke={color}
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='bevel'
            />
        </svg>
    );
}

export const Arrowup = ({color = '#151515', size = '22'}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 40 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M27.9665 23.6667L21.1165 16.8167C20.8042 16.5063 20.3818 16.332 19.9415 16.332C19.5012 16.332 19.0788 16.5063 18.7665 16.8167L12.0999 23.4834'
                stroke={color}
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='bevel'
            />
        </svg>
    );
}
export const Arrowright = ({color = '#151515', size = '22'}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 40 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M16.3333 27.9668L23.1833 21.1168C23.4937 20.8045 23.6679 20.3821 23.6679 19.9418C23.6679 19.5015 23.4937 19.079 23.1833 18.7668L16.5166 12.1001'
                stroke={color}
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='bevel'
            />
        </svg>
    );
}
export const Arrowleft = ({color = '#151515', size = '22'}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 40 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M23.6664 12.0332L16.8164 18.8832C16.506 19.1955 16.3318 19.6179 16.3318 20.0582C16.3318 20.4985 16.506 20.9209 16.8164 21.2332L23.4831 27.8999'
                stroke={color}
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='bevel'
            />
        </svg>
    );
}
