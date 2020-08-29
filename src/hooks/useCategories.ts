import * as React from 'react';
import { useLoading } from './index';

function useCategories() {
    const [categories, setCategories] = React.useState([1, 2, 3, 4, 5, 6]);
    const { loading, setLoading } = useLoading(false);

    React.useEffect(function () {
        setLoading(true);
        window
            .fetch('https://petgram-server-edsf8xpy2.now.sh/categories')
            .then((res: any) => {
                return res.json();
            })
            .then((response: any) => {
                setCategories(response);
                setLoading(false);
            });
    }, []);

    return { categories, loading };
}

export default useCategories;
