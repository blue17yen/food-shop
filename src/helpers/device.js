
const size = {
    mobileS: "320px",
    mobileL: "576px",
    tablet: "768px",
    laptopS: "992px",
    laptopL: "1200px",
    desktop: "1400px",
};

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptopS: `(min-width: ${size.laptopS})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
};