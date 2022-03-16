import { Controller, Get, Param } from '@nestjs/common';
import { BlockchainService } from './blockchain.service';
import { BlockList, BlockDetail } from './blockchain.model';
@Controller()
export class BlockchainController {
  constructor(private readonly service: BlockchainService) {}

  @Get('block/list')
  async getBlocks(): Promise<BlockList[] | Error> {
    return this.service.getLatestBlocks();
  }

  @Get('block/detail/:hash')
  async getBlockDetail(@Param() params): Promise<BlockDetail | Error> {
    const hash: string = params.hash;
    return this.service.getBlockDetail(hash);
  }
}
