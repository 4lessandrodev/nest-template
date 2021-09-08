import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { MongooseModuleOptions } from '@nestjs/mongoose';
import {
	DB_NAME,
	IS_PRODUCTION,
	IS_TESTING,
	MONGO_HOST,
	MONGO_PASSWORD,
	MONGO_PORT,
	MONGO_USER,
	MYSQL_HOST,
	MYSQL_PASSWORD,
	MYSQL_PORT,
	MYSQL_USER,
	PSQL_HOST,
	PSQL_PASSWORD,
	PSQL_PORT,
	PSQL_USER,
	REDIS_HOST,
	REDIS_PASSWORD,
	REDIS_PORT
} from '@config/env';
import { join } from 'path';
import { ClientOpts } from 'redis';

export const MongoDbConfig: MongooseModuleOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
	dbName: DB_NAME
};

export const MongoURI = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${DB_NAME}?authSource=admin`;

export const PostgresDbConfig: TypeOrmModuleOptions = {
	type: 'postgres',
	host: PSQL_HOST,
	port: PSQL_PORT,
	username: PSQL_USER,
	password: PSQL_PASSWORD,
	database: DB_NAME,
	synchronize: !IS_PRODUCTION,
	dropSchema: IS_TESTING,
	entities: [
	  !IS_TESTING
			? join(__dirname, '../**/*.entity.js')
			: join(__dirname, '../**/*.entity.ts')
	],

	migrationsTableName: 'migration',

	migrations: [
	  !IS_TESTING
			? join(__dirname, 'migration/*.js')
			: join(__dirname, 'migration/*.ts')
	],

	cli: {
	  migrationsDir: !IS_TESTING
			? join(__dirname, 'migration/*.js')
			: join(__dirname, 'migration/*.ts')
	},

	ssl: IS_PRODUCTION,
	extra: {
	  ssl: {
			rejectUnauthorized: false
	  }
	}
};

export const MysqlDbConfig: TypeOrmModuleOptions = {
	type: 'mysql',
	host: MYSQL_HOST,
	port: MYSQL_PORT,
	username: MYSQL_USER,
	password: MYSQL_PASSWORD,
	database: DB_NAME,
	synchronize: !IS_PRODUCTION,
	dropSchema: IS_TESTING,
	entities: [
	  !IS_TESTING
			? join(__dirname, '../**/*.entity.js')
			: join(__dirname, '../**/*.entity.ts')
	],

	migrationsTableName: 'migration',

	migrations: [
	  !IS_TESTING
			? join(__dirname, 'migration/*.js')
			: join(__dirname, 'migration/*.ts')
	],

	cli: {
	  migrationsDir: !IS_TESTING
			? join(__dirname, 'migration/*.js')
			: join(__dirname, 'migration/*.ts')
	},

	ssl: IS_PRODUCTION,
	extra: {
	  ssl: {
			rejectUnauthorized: false
	  }
	}
};

export const RedisDbConfig: ClientOpts = {
	host: REDIS_HOST,
	password: REDIS_PASSWORD,
	port: REDIS_PORT
};
