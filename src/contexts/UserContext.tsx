import * as React from 'react';

// @ts-ignore
const UserContext = React.createContext();

// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
    const [isAuth, setIsAuth] = React.useState(false);

    const value = {
        isAuth,
        activateAuth: () => {
            setIsAuth(true);
        },
    };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default {
    Provider,
    Consumer: UserContext.Consumer,
};
