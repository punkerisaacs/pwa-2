import * as React from 'react';
import { ContainerImage, ContainerEmoji, Image, Emoji } from './categoryStyles';

interface Props {
    cover: string;
    path: string;
    emoji: string;
    skeleton: boolean;
}

export default function CategoryItem(props: Props): JSX.Element {
    return (
        <React.Fragment>
            <ContainerImage href={props.path} skeleton={props.skeleton}>
                <Image src={props.cover || ''} alt="" skeleton={props.skeleton} />
            </ContainerImage>
            <ContainerEmoji href={props.path}>
                <Emoji skeleton={props.skeleton}>{props.emoji || ' '}</Emoji>
            </ContainerEmoji>
        </React.Fragment>
    );
}
