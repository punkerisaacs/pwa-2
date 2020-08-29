import * as React from 'react';

function useScrollListener(scrollY: number) {
    const [showFixed, setShowFixed] = React.useState(false);
    React.useEffect(
        function () {
            const onScroll = () => {
                console.log('scroll event');
                const newShowFixed = window.scrollY > scrollY;
                showFixed !== newShowFixed && setShowFixed(newShowFixed);
            };
            document.addEventListener('scroll', onScroll);
            return () => {
                return document.removeEventListener('scroll', onScroll);
            };
        },
        [showFixed],
    );
    return showFixed;
}

export default useScrollListener;
