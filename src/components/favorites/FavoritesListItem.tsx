import * as React from 'react';
import { Grid, Image, Link } from './favoritesStyles';

interface Props {
    id: number;
    src: string;
}

export default function FavoritesListItem(props: Props) {
    return (
        <Link key={props.id} to={`/details/${props.id}`}>
            <Image src={props.src} />
        </Link>
    );
}
