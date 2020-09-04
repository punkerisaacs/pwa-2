import * as React from 'react';
import { CategoryList, PhotoCardList } from '../components';
import { RouteChildrenProps } from 'react-router-dom';

type Props = RouteChildrenProps;

export default function Home(props: Props): JSX.Element {
    // @ts-ignore
    const { id } = props.match.params;
    return (
        <React.Fragment>
            <CategoryList />
            <PhotoCardList categoryId={id} />
        </React.Fragment>
    );
}
