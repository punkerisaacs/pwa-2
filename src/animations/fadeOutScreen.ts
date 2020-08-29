import { keyframes, css } from 'styled-components';

const fadeInKeyframes = keyframes`
  from {
    transform: translateY(0) scale(0.5);
    top: -20px;
  }

  to {
     transform: translateY(-100px) scale(0.5);
     top: -20px;
  }
`;

// eslint-disable-next-line @typescript-eslint/typedef
export const fadeOutScreen = ({ time = '1s', type = 'backwards' } = {}) => {
    return css`
        animation: ${time} ${fadeInKeyframes} ${type};
    `;
};
