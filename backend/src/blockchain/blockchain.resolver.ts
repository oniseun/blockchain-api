import { Resolver, Query, Context, Args } from '@nestjs/graphql';
import { BlockList, BlockDetail } from './blockchain.model';
import { BlockchainService } from './blockchain.service';
// import JSON from 'graphql-type-json';


@Resolver(of => [BlockList])
export class BlockchainResolver {
  constructor(private service: BlockchainService) {}
  @Query(returns => [BlockList])
  async getBlocks(): Promise<BlockList[] | Error> {
    return this.service.getLatestBlocks();
  }

  @Query(returns => BlockDetail)
  async getBlockDetail(@Args('hash') hash: string): Promise<BlockDetail | Error> {
    return this.service.getBlockDetail(hash);
  }
}
