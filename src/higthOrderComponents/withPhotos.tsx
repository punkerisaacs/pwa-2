import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const getPhotos = gql`
    query getPhotos($categoryId: ID) {
        photos(categoryId: $categoryId) {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`;

export const withPhotos = (categoryId: any) => {
    const { loading, error, data } = useQuery(getPhotos, {
        variables: { categoryId },
    });
    return { loading, data, error };
};
