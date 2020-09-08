import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_FAVORITES = gql`
    query getFavs {
        favs {
            id
            categoryId
            src
            likes
            userId
        }
    }
`;

export const getFavorites = () => {
    const { loading, error, data } = useQuery(GET_FAVORITES, { fetchPolicy: 'cache-and-network' });
    return { loading, data, error };
};
