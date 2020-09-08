import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

interface Props {
    email: string | number;
    password: string | number;
}

const REGISTER = gql`
    mutation signup($input: UserCredentials!) {
        signup(input: $input)
    }
`;

export const RegisterMutation = (props: Props) => {
    const [register] = useMutation(REGISTER, { variables: { input: props } });
    return register;
};
