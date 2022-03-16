import { Test, TestingModule } from '@nestjs/testing';
import { BlockchainController } from './blockchain.controller';
import { BlockDetail, BlockList } from './blockchain.model';
import { BlockchainService } from './blockchain.service';

describe('BlockchainController', () => {
  let blockchainController: BlockchainController;
  let blockchainService: BlockchainService;

  const block_list = [
    { hash: "00000000000000000002388bbeb22263e44b03198812cd769f07f7b201ad3938", height: 727444, time: 1647349140, block_index: 727444 },
    { hash: "0000000000000000000702e1aab00e57c8727df44fe98f923429990dd273799f", height: 727443, time: 1647348189, block_index: 727443 },
    { hash: "0000000000000000000153148aeaa61e5110ab6d4a8160b3d1923f6378cad7e9", height: 727442, time: 1647347552, block_index: 727442 },
    { hash: "000000000000000000054cc529bd6e61054f2a7f0e0d331fd51d9f0e2eb3227d", height: 727441, time: 1647347347, block_index: 727441 }
  ]
  const block_detail = {
    hash: "00000000000000000002388bbeb22263e44b03198812cd769f07f7b201ad3938",
    size: 1473565,
    block_index: 727444,
    prev_block: "0000000000000000000702e1aab00e57c8727df44fe98f923429990dd273799f",
    tx: [{
      hash: "dbd264ab052e2acddf8af7b4481965d6df1fa25e4e08e6c1cd7fb7a271dd9593", 
      size: 206, 
      fee: 0, 
      relayed_by: "0.0.0.0", 
      time: 1647348369,
    }]
  }
  const hash = '00000000000000000002388bbeb22263e44b03198812cd769f07f7b201ad3938'

  const mockService = {
    getLatestBlocks: () => block_list,
    getBlockDetail: (hash: string) => block_detail
  };

  const blockchainServiceProvider = {
    provide: BlockchainService,
    useValue: mockService,
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BlockchainController],
      providers: [blockchainServiceProvider],
    }).compile();

    blockchainService = app.get<BlockchainService>(BlockchainService);
    blockchainController = app.get<BlockchainController>(BlockchainController);
  });

  it('should be defined', () => {
    expect(blockchainController).toBeDefined();
  });

  describe('getBlocks', () => {
    it('should return list of blocks', async () => {
      const prom: Promise<BlockList[]> = new Promise((resolve) =>
        resolve(block_list),
      );
      jest
        .spyOn(blockchainService, 'getLatestBlocks')
        .mockImplementation(() => prom);

      expect(await blockchainController.getBlocks()).toBe(block_list);
    });
  });

  describe('getBlockDetails', () => {
    it('should return block detail', async () => {
      const req = { hash };
      const prom: Promise<BlockDetail> = new Promise((resolve) =>
        resolve(block_detail),
      );
      jest
        .spyOn(blockchainService, 'getBlockDetail')
        .mockImplementation(() => prom);

      expect(await blockchainController.getBlockDetail(req)).toBe(block_detail);
    });
  });
});
