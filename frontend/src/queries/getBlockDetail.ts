import { gql } from '@apollo/client';

 const GET_BLOCK_DETAIL =   gql`
    query ($hash: String!) {
        getBlockDetail(
        hash: $hash
    ) {
            size
            block_index
            prev_block
            hash
            tx {
                    hash
                    size
                    fee
                    relayed_by
                    time
            }
        }
    }
`

export default GET_BLOCK_DETAIL