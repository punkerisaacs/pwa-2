import * as React from 'react';
import { Anchor, Image } from './categoryStyles';

interface Props {
    cover: string;
    path: string;
    emoji: string;
}
export default function Category(props: Props): JSX.Element {
    return (
        <Anchor href={props.path}>
            <Image src={props.cover} alt="" />
            {props.emoji}
        </Anchor>
    );
}
