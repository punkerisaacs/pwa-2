import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import * as React from 'react';

const GET_SINGLE_PHOTO = gql`
    query getSinglePhoto($id: ID!) {
        photo(id: $id) {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`;

export const details = (id: string | number) => {
    const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
        variables: { id },
    });
    return { loading, data, error };
};