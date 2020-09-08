import * as React from 'react';
import { Button } from './submitBottonStyles';

interface Props {
    children: string;
    disabled?: boolean;
    onClick?: () => void;
}

export default function SubmitButton(props: Props) {
    return (
        <Button
            disabled={props.disabled}
            onClick={() => {
                return props.onClick ? props.onClick() : '';
            }}>
            {props.children}
        </Button>
    );
}
