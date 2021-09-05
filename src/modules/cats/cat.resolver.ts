import { Query, Resolver } from '@nestjs/graphql';
import { Cat } from './cat.model';

@Resolver(() => Cat)
export class CatResolver {
	@Query(() => Cat)
	async cat () {
		return {
			id: 1,
			name: 'Meow'
		};
	}
}
