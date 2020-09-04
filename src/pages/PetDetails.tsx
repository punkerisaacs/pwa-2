import * as React from 'react';
import { PhotoCardItem } from '../components';
import { details } from '../higthOrderComponents';
import { RouteChildrenProps } from 'react-router-dom';

type Props = RouteChildrenProps;

export default function PetDetails(props: Props) {
    // @ts-ignore
    const { id } = props.match.params;
    const { loading, error, data } = details(id);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    const { photo = {} } = data;
    return <PhotoCardItem {...photo} />;
}
