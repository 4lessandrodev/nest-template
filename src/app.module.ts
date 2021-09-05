import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { CatResolver } from './modules/cats/cat.resolver';

@Module({
	imports: [
		GraphQLModule.forRoot({
			debug: false,
			playground: true,
			autoSchemaFile: join(process.cwd(), 'src/schema.gql')
		})
	],
	providers: [CatResolver]
})
export class AppModule {}
