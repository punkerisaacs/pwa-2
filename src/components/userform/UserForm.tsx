import * as React from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Error, Form, Input, Button, Title } from './userFormStyles';
import { SubmitBotton } from '../index';

interface SubmitProps {
    email: string | number;
    password: string | number;
}

interface Props {
    error: string;
    disabled: boolean;
    onSubmit: (props: SubmitProps) => void;
    title: string;
}

export default function UserForm(props: Props): JSX.Element {
    const email = useInputValue('');
    const password = useInputValue('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.onSubmit({
            email: email.value,
            password: password.value,
        });
    };
    return (
        <React.Fragment>
            <Form disabled={props.disabled} onSubmit={handleSubmit}>
                <Title>{props.title}</Title>
                <Input disabled={props.disabled} placeholder="Email" {...email} />
                <Input disabled={props.disabled} placeholder="Password" type="password" {...password} />
                <SubmitBotton disabled={props.disabled}>{props.title}</SubmitBotton>
            </Form>
            {props.error && <Error>{props.error}</Error>}
        </React.Fragment>
    );
}
