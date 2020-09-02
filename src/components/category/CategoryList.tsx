import * as React from 'react';
import { CategoryItem } from '../index';
import { useCategories, useScrollListener } from '../../hooks';
import { ContainerList, List, Item } from './categoryStyles';

export default function CategoryList(): JSX.Element {
    const { categories, loading } = useCategories();

    const showFixed = useScrollListener(250);

    const renderList = (fixed?: boolean, loading?: boolean) => {
        return (
            <List fixed={fixed}>
                {categories.map((category: any) => {
                    return (
                        <Item key={category.id}>
                            <CategoryItem {...category} skeleton={loading} path={`/pet/${category.id}`} />
                        </Item>
                    );
                })}
            </List>
        );
    };

    return <ContainerList>{renderList(showFixed, loading)}</ContainerList>;
}
