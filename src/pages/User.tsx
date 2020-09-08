import * as React from 'react';
import { UserContext } from '../contexts/UserContext';
import { SubmitBotton } from '../components';

export default function User() {
    // @ts-ignore
    const { removeAuth } = React.useContext(UserContext);
    return (
        <React.Fragment>
            <h1>User</h1>
            <SubmitBotton onClick={removeAuth}>Cerrar sesión</SubmitBotton>
        </React.Fragment>
    );
}
