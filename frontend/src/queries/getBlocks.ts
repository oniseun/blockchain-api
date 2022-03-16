import { gql } from '@apollo/client';

 const GET_BLOCKS = gql`
query {
    getBlocks {
        hash
        height
        time
        block_index
    }
}
`;

export default GET_BLOCKS