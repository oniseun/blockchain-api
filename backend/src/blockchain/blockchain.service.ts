import { HttpService, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RedisCacheService } from '../redis-cache/redis-cache.service';
import { BlockList, BlockDetail } from './blockchain.model';
const LOG_PREFIX = 'BlockchainService:';
@Injectable()
export class BlockchainService {
  constructor(
    private httpService: HttpService,
    private env: ConfigService,
    private cacheManager: RedisCacheService,
  ) {}
  async getLatestBlocks(): Promise<BlockList[] | Error> {
    const CACHE_KEY = `BLOCK_LIST`;
    const url = `${this.env.get('BLOCKCHAIN_URL')}/blocks/${Date.now()}/?format=json`;
    const headers: object = { 'Content-Type': 'application/json' };
    
    try {
      const response = await this.httpService.get(url, { headers }).toPromise();

      Logger.log(
        `GET URL: ${url} - 
        httpstatus: ${response.status}(${response.statusText.toUpperCase()})`,
        LOG_PREFIX,
      );
      Logger.log(`CACHING BLOCKCHAIN LIST -> ${CACHE_KEY}`, LOG_PREFIX);
      await this.cacheManager.set(CACHE_KEY, response.data); // add to cache

      return response.data;
    } catch (error) {
      const cachedData = await this.cacheManager.get(CACHE_KEY);
      if (cachedData) {
        Logger.log(
          `FETCHING BLOCK LIST FROM CACHE ${CACHE_KEY}`,
          LOG_PREFIX,
        );
        return cachedData;
      }

      Logger.log(
        `GET URL: ${url} - ERROR: ${error.code} ${
          error.message
        } ${JSON.stringify(error.response)}`,
        LOG_PREFIX,
      );

      throw new Error(error.toString());
    }
  }

  async getBlockDetail(hash: string): Promise<BlockDetail | Error> {
    const CACHE_KEY = `BLOCK_DETAIL_${hash}`;
    const url = `${this.env.get('BLOCKCHAIN_URL')}/rawblock/${hash}`;
    const headers: object = { 'Content-Type': 'application/json' };

    const cachedData = await this.cacheManager.get(CACHE_KEY);
    if (cachedData) {
      Logger.log(
        `FETCHING BLOCK DETAILS FROM CACHE ${CACHE_KEY}`,
        LOG_PREFIX,
      );
      return cachedData;
    }

    try {
      const response = await this.httpService.get(url, { headers }).toPromise();

      Logger.log(
        `GET URL: ${url} - 
        httpstatus: ${response.status}(${response.statusText.toUpperCase()}) `,
        LOG_PREFIX,
      );
      Logger.log(`CACHING BLOCKCHAIN DATA -> ${CACHE_KEY}`, LOG_PREFIX);
      await this.cacheManager.set(CACHE_KEY, response.data); // add to cache

      return response.data;
    } catch (error) {

      Logger.log(
        `GET URL: ${url} - ERROR: ${error.code} ${
          error.message
        } ${JSON.stringify(error.response)}`,
        LOG_PREFIX,
      );

      throw new Error(error.toString())
    }
  }
}
