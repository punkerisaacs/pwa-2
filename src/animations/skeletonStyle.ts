import { css, keyframes } from 'styled-components';

const skeletonBackground = () => {
    return css`
        background: ${css`linear-gradient(-90deg, #d2cfcf 0%, #F8F8F8 50%, #D2CFCF 100%)`};
        background-size: 400% 400%;
        animation: ${skeletonLoading} 1.2s ease-in-out infinite;
    `;
};

const skeletonLoading = keyframes`
    from {
        background-position:0% 0%;
    }
    to {
        background-position: -135% 0%;
    }
`;

export const skeletonStyle = () => {
    return skeletonBackground();
};
