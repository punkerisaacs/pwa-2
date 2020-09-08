import * as React from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { Button } from './buttonLikeStyles';

interface Props {
    liked: boolean;
    likes: number;
    onClick: () => void;
}

export default function ButtonLike({ liked, likes, onClick }: Props) {
    const Icon = liked ? MdFavorite : MdFavoriteBorder;
    return (
        <Button onClick={onClick}>
            <Icon size="32px" /> {likes} likes!
        </Button>
    );
}
