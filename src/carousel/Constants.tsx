let CAROUSEL_SLIDER_WIDTH: number;
const setSilderWidth = (width: number) => {
    CAROUSEL_SLIDER_WIDTH = width;
};

const getSilderWidth = () => {
    return CAROUSEL_SLIDER_WIDTH;
};

export { setSilderWidth, getSilderWidth };
export const CAROUSEL_SLIDER_GAP: number = 15;
export const CAROUSEL_SLIDES_PER_PAGE: number = 6;

