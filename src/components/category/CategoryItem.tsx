import * as React from 'react';
import { Anchor, Image, Emoji } from './categoryStyles';

interface Props {
    cover: string;
    path: string;
    emoji: string;
    skeleton: boolean;
}

export default function CategoryItem(props: Props): JSX.Element {
    return (
        <Anchor href={props.path}>
            <Image src={props.cover} alt="" skeleton={props.skeleton} />
            <Emoji skeleton={props.skeleton}>{props.emoji || ' '}</Emoji>
        </Anchor>
    );
}
