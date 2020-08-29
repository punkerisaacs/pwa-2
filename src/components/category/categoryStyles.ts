import styled, { css } from 'styled-components';
import { fadeInScreen } from '../../animations/fadeInScreen';
import { fadeOutScreen } from '../../animations/fadeOutScreen';
import { skeletonStyle } from '../../animations/skeletonStyle';
import Props from './propsInterface';

interface PropsChildren {
    skeleton?: boolean;
}

export const List = styled.ul`
    display: flex;
    overflow: scroll;
    width: 100%;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const FloatList = styled.ul`
    display: flex;
    overflow: scroll;
    width: 100%;
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    right: 0;
    z-index: 1;
    transform: scale(0.5);
    top: -100px;
    &::-webkit-scrollbar {
        display: none;
    }

    ${(props: Props) => {
        return props.fixed
            ? css`
                   {
                      ${fadeInScreen({ time: '.3s' })};
                      top: -20px;
                  }
              `
            : css`
                   {
                      ${fadeOutScreen({ time: '.3s' })};
                  }
              `;
    }}
`;

export const Item = styled.li`
    padding: 0 8px;
`;

export const Anchor = styled.a`
    display: flex;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
    width: 75px;
`;

export const Image = styled.img`
    border: 1px solid #ddd;
    box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
    height: 75px;
    width: 75px;
    ${(props: PropsChildren) => {
        return (
            props.skeleton &&
            css`
                 {
                    ${skeletonStyle()}
                }
            `
        );
    }}
`;

export const Emoji = styled.span`
    ${(props: PropsChildren) => {
        return (
            props.skeleton &&
            css`
                 {
                    ${skeletonStyle()}
                }
            `
        );
    }}
`;
