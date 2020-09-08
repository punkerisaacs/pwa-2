import * as React from 'react';

export const useInputValue = (initialValue: string | number) => {
    const [value, setValue] = React.useState(initialValue);
    const onChange = (e: any) => {
        return setValue(e.target.value);
    };

    return { value, onChange };
};
