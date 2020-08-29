import * as React from 'react';
import { CategoryItem } from '../index';
import { useCategories } from '../../hooks';
import { List, FloatList, Item } from './categoryStyles';

export default function CategoryList(): JSX.Element {
    const { categories, loading } = useCategories();
    const [showFixed, setShowFixed] = React.useState(false);

    React.useEffect(
        function () {
            const onScroll = () => {
                console.log('scroll event');
                const newShowFixed = window.scrollY > 200;
                showFixed !== newShowFixed && setShowFixed(newShowFixed);
            };
            document.addEventListener('scroll', onScroll);
            return () => {
                return document.removeEventListener('scroll', onScroll);
            };
        },
        [showFixed],
    );

    const renderList = () => {
        return (
            <List>
                {categories.map((category: any) => {
                    return (
                        <Item key={category.id}>
                            <CategoryItem {...category} skeleton={loading} />
                        </Item>
                    );
                })}
            </List>
        );
    };

    const renderFloatList = (fixed?: boolean) => {
        return (
            <FloatList fixed={fixed}>
                {categories.map((category: any) => {
                    return (
                        <Item key={category.id}>
                            <CategoryItem {...category} />
                        </Item>
                    );
                })}
            </FloatList>
        );
    };

    return (
        <React.Fragment>
            {renderList()}
            {renderFloatList(showFixed)}
        </React.Fragment>
    );
}
