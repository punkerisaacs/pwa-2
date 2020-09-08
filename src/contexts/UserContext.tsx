import * as React from 'react';

// @ts-ignore
export const UserContext = React.createContext();

// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
    const [isAuth, setIsAuth] = React.useState(() => {
        return !!window.sessionStorage.getItem('token');
    });

    const value = {
        isAuth,
        activateAuth: (token: string) => {
            setIsAuth(true);
            window.sessionStorage.setItem('token', token);
        },
        removeAuth: () => {
            setIsAuth(false);
            window.sessionStorage.removeItem('token');
        },
    };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default {
    Provider,
    Consumer: UserContext.Consumer,
};
