import { MongoDbConfig, MongoURI, MysqlDbConfig, PostgresDbConfig, RedisDbConfig } from '../db.config';
import { DB_NAME, MONGO_USER, MONGO_PASSWORD, MONGO_HOST, MONGO_PORT, PSQL_HOST, PSQL_PORT, PSQL_USER, PSQL_PASSWORD, IS_PRODUCTION, IS_TESTING, REDIS_HOST, REDIS_PASSWORD, REDIS_PORT, MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD } from '@config/env';

describe('db.config', () => {
	it('should mongo config be defined', () => {
		expect(MongoDbConfig).toEqual({
			useNewUrlParser: true,
			useUnifiedTopology: true,
			dbName: DB_NAME
		});
	});

	it('should mongo uri be defined', () => {
		expect(MongoURI).toBe(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${DB_NAME}?authSource=admin`);
	});

	it('should postgres config be defined', () => {
		expect(PostgresDbConfig.type).toBe('postgres');
		expect(PostgresDbConfig.host).toBe(PSQL_HOST);
		expect(PostgresDbConfig.port).toBe(PSQL_PORT);
		expect(PostgresDbConfig.username).toBe(PSQL_USER);
		expect(PostgresDbConfig.password).toBe(PSQL_PASSWORD);
		expect(PostgresDbConfig.dropSchema).toBe(IS_TESTING);
		expect(PostgresDbConfig.database).toBe(DB_NAME);
		expect(PostgresDbConfig.ssl).toBe(IS_PRODUCTION);
		expect(PostgresDbConfig.synchronize).toBe(!IS_PRODUCTION);
		expect(PostgresDbConfig.extra).toEqual({
			ssl: {
				  rejectUnauthorized: false
			}
		});
	});

	it('should mysql config be defined', () => {
		expect(MysqlDbConfig.type).toBe('mysql');
		expect(MysqlDbConfig.host).toBe(MYSQL_HOST);
		expect(MysqlDbConfig.port).toBe(MYSQL_PORT);
		expect(MysqlDbConfig.username).toBe(MYSQL_USER);
		expect(MysqlDbConfig.password).toBe(MYSQL_PASSWORD);
		expect(MysqlDbConfig.dropSchema).toBe(IS_TESTING);
		expect(MysqlDbConfig.database).toBe(DB_NAME);
		expect(MysqlDbConfig.ssl).toBe(IS_PRODUCTION);
		expect(MysqlDbConfig.synchronize).toBe(!IS_PRODUCTION);
		expect(MysqlDbConfig.extra).toEqual({
			ssl: {
				  rejectUnauthorized: false
			}
		});
	});

	it('should redis config be defined', () => {
		expect(RedisDbConfig).toEqual({
			host: REDIS_HOST,
			password: REDIS_PASSWORD,
			port: REDIS_PORT
		});
	});
});
