import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BlockTransactions {
  @Field()
  hash: string;

  @Field(() => Int)
  size: number;

  @Field(() => Int)
  fee: number;

  @Field()
  relayed_by: string;

  @Field(() => Int)
  time: number;

}


@ObjectType()
export class BlockList {
  @Field()
  hash: string;

  @Field(() => Int)
  height: number;

  @Field(() => Int)
  time: number;

  @Field(() => Int)
  block_index: number;

}

@ObjectType()
export class BlockDetail {
  @Field(() => Int)
  size: number;

  @Field(() => Int)
  block_index: number;

  @Field()
  prev_block: string;

  @Field()
  hash: string;

  @Field(() => [BlockTransactions])
  tx: BlockTransactions[];

}
