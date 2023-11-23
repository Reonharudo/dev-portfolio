import React from "react";

interface MenuIconProps {
    height: number;
    width: number;
    className: string;
    onClick: () => any;
}

export function MenuIcon({ height, width, className, onClick }: MenuIconProps) {
    return (
        <svg
            onClick={onClick}
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            viewBox="0 -960 960 960"
            width={width}
            className={className}
        >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
    );
}
