import styled, { css } from 'styled-components';
import { fadeInScreen } from '../../animations/fadeInScreen';
import { skeletonStyle } from '../../animations/skeletonStyle';
import { Link } from 'react-router-dom';
export interface ListProps {
    fixed?: boolean;
}

interface PropsChildren {
    skeleton?: boolean;
}

export const ContainerList = styled.div`
    height: 100px;
    margin: 10px 5px;
    padding: 3px;
`;

export const List = styled.ul<ListProps>`
    display: flex;
    overflow: scroll;
    width: 100%;
    &::-webkit-scrollbar {
        display: none;
    }
    ${(props: ListProps) => {
        return (
            props.fixed &&
            css`
                background: #fff;
                border-radius: 60px;
                box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
                left: 0;
                margin: 0 auto;
                max-width: 400px;
                height: 110px;
                padding: 5px;
                position: fixed;
                right: 0;
                z-index: 1;
                transform: scale(0.5);
                top: -20px;
                ${fadeInScreen({ time: '.3s' })};
            `
        );
    }}
`;

export const Item = styled.li`
    padding: 0 8px;
`;

export const ContainerImage = styled(Link)`
    display: flex;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
    height: 75px;
    width: 75px;
    border-image-slice: 2;
    border-radius: 50%;
    border: double 4px transparent;
    background-image: linear-gradient(#ff0000, #fff500), radial-gradient(circle at top left, #f0ff00, #cf08fc);
    background-origin: border-box;
    background-clip: content-box, border-box;

    ${(props: PropsChildren) => {
        return (
            props.skeleton &&
            css`
                 {
                    background-image: none;
                }
            `
        );
    }}
`;

export const ContainerEmoji = styled.a`
    display: flex;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
    height: 75px;
    width: 75px;
`;

export const Image = styled.img`
    border-radius: 50%;
    box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    object-fit: cover;
    height: 100%;
    width: 100%;
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
