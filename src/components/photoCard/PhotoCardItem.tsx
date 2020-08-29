import * as React from 'react';
import { Article, Button, Img, ImgWrapper } from './photoCardStyles';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { useLocalStorage, useNearScreen } from '../../hooks';

interface Props {
    id: string | number;
    likes: number;
    src: string;
}

export default function PhotoCardItem(props: Props): JSX.Element {
    const key = `like-${props.id}`;
    const [liked, setLiked] = useLocalStorage(key, false);
    const [show, element] = useNearScreen();

    const Icon = liked ? MdFavorite : MdFavoriteBorder;

    return (
        <Article ref={element}>
            {show && (
                <React.Fragment>
                    <a href={`/detail/${props.id}`}>
                        <ImgWrapper>
                            <Img src={props.src || ''} alt="mascota" />
                        </ImgWrapper>
                    </a>
                    <Button
                        onClick={() => {
                            return setLiked(!liked);
                        }}>
                        <Icon size="32" />
                        {props.likes || 0} likes!
                    </Button>
                </React.Fragment>
            )}
        </Article>
    );
}
