import * as React from 'react';
import { CategoryList, PhotoCardList, Logo, PetDetails, BottomTabs } from './components';
import { GlobalStyles } from './globalStyles';
import { Switch, Route } from 'react-router-dom';

export default function App(): JSX.Element {
    return (
        <React.Fragment>
            <GlobalStyles />
            <Logo />
            <CategoryList />

            <Switch>
                <Route exact path="/" component={PhotoCardList} />
                <Route exact path="/pet/:id" component={PhotoCardList} />
                <Route exact path="/details/:id" component={PetDetails} />
            </Switch>

            <BottomTabs />
        </React.Fragment>
    );
}
