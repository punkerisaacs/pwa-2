import * as React from 'react';
import { PhotoCardItem } from '../index';
import { withPhotos } from '../../higthOrderComponents';
import { RouteChildrenProps } from 'react-router-dom';

type Props = RouteChildrenProps;

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_hamsters.jpg';
export default function PhotoCardList(props: Props): JSX.Element {
    // @ts-ignore
    const { id } = props.match.params;
    const { data: { photos = [] } = {} } = withPhotos(id);
    return (
        <ul>
            {/* eslint-disable-next-line @typescript-eslint/typedef */}
            {photos.map((item: any) => {
                return <PhotoCardItem key={item.id} id={item.id} likes={item.likes} src={item.src || DEFAULT_IMAGE} />;
            })}
        </ul>
    );
}
