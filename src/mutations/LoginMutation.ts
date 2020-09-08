import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

interface Props {
    email: string | number;
    password: string | number;
}

const LOGIN = gql`
    mutation login($input: UserCredentials!) {
        login(input: $input)
    }
`;

export const LoginMutation = (props: Props) => {
    const [login] = useMutation(LOGIN, { variables: { input: props } });
    return login;
};
