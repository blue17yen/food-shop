import React from 'react';
import Icon from "../../Icon/Icon";

/* Left Arrow */
import leftArrowGreen from "../../../../assets/svg/arrows/left-arrow.svg";
import leftArrowWhite from "../../../../assets/svg/arrows/left-arrow-white.svg";
import leftArrowBlack from "../../../../assets/svg/arrows/left-arrow-black.svg";
/* Right Arrow */
import rightArrowGreen from "../../../../assets/svg/arrows/right-arrow.svg";
import rightArrowWhite from "../../../../assets/svg/arrows/right-arrow-white.svg";
import rightArrowBlack from "../../../../assets/svg/arrows/right-arrow-black.svg";

const ArrowIco = ({ direction, variant }) => {
    const arrow = {
        start: {
            color: {
                normal: leftArrowGreen,
                filled: leftArrowWhite,
                bright: leftArrowBlack,
            },
            margin: '0 6 0 0'
        },
        end: {
            color: {
                normal: rightArrowGreen,
                filled: rightArrowWhite,
                bright: rightArrowBlack,
            },
            margin: '0 0 0 6'
        },
    };

    return (
        <Icon
            icon={arrow[direction].color[variant]}
            margin={arrow[direction].margin}
            iconName={`arrow-${direction}-${variant}`}
        />
    );
};

export default ArrowIco;