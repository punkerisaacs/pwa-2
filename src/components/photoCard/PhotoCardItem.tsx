import * as React from 'react';
import { Article, Img, ImgWrapper } from './photoCardStyles';
import { useLocalStorage, useNearScreen } from '../../hooks';
import { ButtonLike } from '../index';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';

interface Props {
    id: string | number;
    likes: number;
    src: string;
    liked: boolean;
}

const TOGGLE_LIKE = gql`
    mutation likePhoto($input: LikePhoto!) {
        likePhoto(input: $input) {
            id
            liked
            likes
        }
    }
`;

export default function PhotoCardItem(props: Props): JSX.Element {
    const key = `like-${props.id}`;
    const [liked, setLiked] = useLocalStorage(key, false);
    const [show, element] = useNearScreen();
    const [toggleLike] = useMutation(TOGGLE_LIKE, { variables: { input: { id: props.id } } });

    const handleClick = () => {
        toggleLike().then();
    };

    return (
        <Article ref={element}>
            {show && (
                <React.Fragment>
                    <Link to={`/details/${props.id}`}>
                        <ImgWrapper>
                            <Img src={props.src || ''} alt="mascota" />
                        </ImgWrapper>
                    </Link>
                    <ButtonLike onClick={handleClick} liked={props.liked} likes={props.likes} />
                </React.Fragment>
            )}
        </Article>
    );
}
