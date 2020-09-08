import * as React from 'react';
import { Logo, BottomTabs } from './components';
import { Home, PetDetails, Favorites, User, NotRegisteredUser, NotFound } from './pages';
import { GlobalStyles } from './globalStyles';
import { Switch, Route, Redirect } from 'react-router-dom';
import { UserContext } from './contexts/UserContext';

export default function App(): JSX.Element {
    // @ts-ignore
    const { isAuth } = React.useContext(UserContext);
    return (
        <React.Fragment>
            <GlobalStyles />
            <Logo />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pet/:id" component={Home} />
                <Route exact path="/details/:id" component={PetDetails} />
                {!isAuth && <Route path="/login" component={NotRegisteredUser} />}
                {!isAuth && <Redirect from="/favorites" to="/login" />}
                {!isAuth && <Redirect from="/profile" to="/login" />}
                {isAuth && <Redirect from="/login" to="/" />}
                <Route exact path="/favorites" component={Favorites} />
                <Route exact path="/profile" component={User} />
                <Route path="*" component={NotFound} />
            </Switch>

            <BottomTabs />
        </React.Fragment>
    );
}
