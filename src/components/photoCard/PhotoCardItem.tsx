import * as React from 'react';
import { Button, Img, ImgWrapper } from './photoCardStyles';
import { MdFavoriteBorder } from 'react-icons/md';

interface Props {
    id: string;
    likes: number;
    src: string;
}

export default function PhotoCardItem(props: Props): JSX.Element {
    return (
        <article>
            <a href={`/detail/${props.id}`}>
                <ImgWrapper>
                    <Img src={props.src} alt="mascota" />
                </ImgWrapper>
            </a>
            <Button>
                <MdFavoriteBorder size="32" />
                {props.likes || 0} likes!
            </Button>
        </article>
    );
}
