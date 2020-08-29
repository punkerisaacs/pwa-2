import { keyframes, css } from 'styled-components';

const fadeInKeyframes = keyframes`
  from {
    transform: translateY(-100px) scale(0.5);
  }

  to {
     transform: translateY(0) scale(0.5);
  }
`;

// eslint-disable-next-line @typescript-eslint/typedef
export const fadeInScreen = ({ time = '1s', type = 'backwards' } = {}) => {
    return css`
        animation: ${time} ${fadeInKeyframes} ${type};
    `;
};
