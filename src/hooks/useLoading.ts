import * as React from 'react';

function useLoading(initialProp: boolean) {
    const [loading, setLoading] = React.useState(initialProp);
    return { loading, setLoading };
}

export default useLoading;
