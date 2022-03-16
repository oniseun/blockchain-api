import { HttpModule, Module } from '@nestjs/common';
import { BlockchainService } from './blockchain.service';
import { BlockchainController } from './blockchain.controller';
import { RedisCacheModule } from 'src/redis-cache/redis-cache.module';
import { BlockchainResolver } from './blockchain.resolver';

@Module({
  imports: [RedisCacheModule, HttpModule],
  controllers: [BlockchainController],
  providers: [BlockchainService, BlockchainResolver],
})
export class BlockchainModule {}
