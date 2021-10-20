import { Test, TestingModule } from '@nestjs/testing';
import { PORT_TESTING } from '@config/env';
import { INestApplication } from '@nestjs/common';
import { GraphQLClient, gql } from 'graphql-request';
import { AppModule } from '@app/app.module';
import { Query, Cat } from '@app/gql-types';

describe('auth.resolver', () => {
	jest.setTimeout(300000);
	let app: INestApplication;
	let client: GraphQLClient; ;
	const PORT = PORT_TESTING;

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [AppModule]
		}).compile();

		app = module.createNestApplication();
		await app.listen(PORT);

		client = new GraphQLClient(`http://localhost:${PORT}/graphql`, {
			credentials: 'include'
		});
	});

	it('should get a cat', async () => {
		const query = gql`
			query {
				cat {
					id
					name
				}
			}`;

		const result = await client.request<Pick<Query, 'cat'>, Cat>(query);

		expect(result.cat).toEqual({ id: 1, name: 'Meow' });
	});
});
