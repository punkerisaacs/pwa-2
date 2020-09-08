import * as React from 'react';
import { Grid, Image, Link } from './favoritesStyles';
import { FavoritesListItem } from '../index';
import { getFavorites } from '../../higthOrderComponents';

export default function FavoritesList() {
    const { data: { favs = [] } = {} } = getFavorites();
    return (
        <Grid>
            {favs.map((item: any) => {
                return <FavoritesListItem key={item.id} {...item} />;
            })}
        </Grid>
    );
}
