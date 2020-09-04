import * as React from 'react';
import UserContext from '../contexts/UserContext';

export default function NotRegisteredUser(): JSX.Element {
    return (
        <UserContext.Consumer>
            {({ activateAuth }) => {
                return (
                    <form onSubmit={activateAuth}>
                        <button>Iniciar sesión</button>
                    </form>
                );
            }}
        </UserContext.Consumer>
    );
}
