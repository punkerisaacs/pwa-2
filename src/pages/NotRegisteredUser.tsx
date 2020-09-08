import * as React from 'react';
import { UserContext } from '../contexts/UserContext';
import { UserForm } from '../components';
import { RegisterMutation } from '../mutations/RegisterMutation';
import { LoginMutation } from '../mutations/LoginMutation';

export default function NotRegisteredUser(): JSX.Element {
    const input = { email: '', password: '' };
    const [loading, setLoading] = React.useState(false);
    const [errorLogin, setErrorLogin] = React.useState('');
    const [errorRegister, setErrorRegister] = React.useState('');
    // @ts-ignore
    const { activateAuth } = React.useContext(UserContext);
    const login = LoginMutation(input);
    const register = RegisterMutation(input);
    /*
    const { activateAuth } = RegisterMutation(UserContext);
    const { activateAuth } = LoginMutation(UserContext);
     */

    const onSubmitRegister = async ({ email, password }) => {
        const input = { email, password };
        const variables = { input };
        // @ts-ignore
        setLoading(true);
        setErrorRegister('');
        const error = await register({ variables })
            .then(({ data }) => {
                const { signup } = data;
                activateAuth(signup);
                return '';
            })
            .catch(() => {
                return 'Usuario ya existe';
            });
        setLoading(false);
        setErrorRegister(error);
    };

    const onSubmitLogin = async ({ email, password }) => {
        const input = { email, password };
        const variables = { input };
        // @ts-ignore
        setLoading(true);
        setErrorLogin('');
        const error = await login({ variables })
            .then(({ data }) => {
                console.log(data);
                const { login } = data;
                activateAuth(login);
                return '';
            })
            .catch(() => {
                return 'Error de credenciales';
            });

        setLoading(false);
        setErrorLogin(error);
    };

    return (
        <React.Fragment>
            <UserForm disabled={loading} error={errorRegister} title="Registrarse" onSubmit={onSubmitRegister} />
            <UserForm disabled={loading} error={errorLogin} title="Iniciar sesión" onSubmit={onSubmitLogin} />
        </React.Fragment>
    );
}
