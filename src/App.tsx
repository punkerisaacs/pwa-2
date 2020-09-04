import * as React from 'react';
import { CategoryList, PhotoCardList, Logo, BottomTabs } from './components';
import { Home, PetDetails, Favorites, User, NotRegisteredUser } from './pages';
import { GlobalStyles } from './globalStyles';
import { Switch, Route } from 'react-router-dom';
import UserContext from './contexts/UserContext';

export default function App(): JSX.Element {
    return (
        <React.Fragment>
            <GlobalStyles />
            <Logo />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pet/:id" component={Home} />
                <Route exact path="/details/:id" component={PetDetails} />
            </Switch>

            <UserContext.Consumer>
                {({ isAuth }) => {
                    return isAuth ? (
                        <Switch>
                            <Route exact path="/favorites" component={Favorites} />
                            <Route exact path="/profile" component={User} />
                        </Switch>
                    ) : (
                        <Switch>
                            <Route exact path="/favorites" component={NotRegisteredUser} />
                            <Route exact path="/profile" component={NotRegisteredUser} />
                        </Switch>
                    );
                }}
            </UserContext.Consumer>

            <BottomTabs />
        </React.Fragment>
    );
}
