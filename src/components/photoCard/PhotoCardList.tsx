import * as React from 'react';
import { PhotoCardItem } from '../index';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_hamsters.jpg';

export default function PhotoCardList(): JSX.Element {
    return (
        <ul>
            {/* eslint-disable-next-line @typescript-eslint/typedef */}
            {[1, 2, 3].map((id) => {
                return <PhotoCardItem key={id} id={'1'} likes={0} src={DEFAULT_IMAGE} />;
            })}
        </ul>
    );
}
