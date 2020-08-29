import * as React from 'react';
import { CategoryList, PhotoCardList, Logo } from './components';
import { GlobalStyles } from './globalStyles';

export default function App(): JSX.Element {
    return (
        <React.Fragment>
            <GlobalStyles />
            <Logo />
            <CategoryList />
            <PhotoCardList />
        </React.Fragment>
    );
}
