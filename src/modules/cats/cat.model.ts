import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Cat {
	@Field(() => Int)
	id: number;

	@Field(() => String)
	name: string;
}
