import {
	JWT_EXPIRATION_IN_HOURS,
	CURRENCY,
	DB_NAME,
	IS_PRODUCTION,
	IS_TESTING,
	JWT_SECRET,
	MONGO_HOST,
	MONGO_PASSWORD,
	MONGO_PORT,
	MONGO_USER,
	MYSQL_PASSWORD,
	MYSQL_USER,
	MYSQL_PORT,
	PORT,
	PSQL_HOST,
	PSQL_PASSWORD,
	REDIS_HOST,
	PSQL_PORT,
	PSQL_USER,
	REDIS_PASSWORD,
	PORT_TESTING
} from '@config/env';

describe('env.ts', () => {
	it('should mongo variables be defined with default values', () => {
		expect(DB_NAME).toBe('db');
		expect(MONGO_HOST).toBe('localhost');
		expect(MONGO_PASSWORD).toBe('mongo');
		expect(MONGO_PORT).toBe(27017);
		expect(MONGO_USER).toBe('mongo');
	});

	it('should postgres variables be defined with default value', () => {
		expect(PSQL_HOST).toBe('localhost');
		expect(PSQL_PASSWORD).toBe('postgres');
		expect(PSQL_PORT).toBe(5432);
		expect(PSQL_USER).toBe('postgres');
	});
	it('should mysql variables be defined with default value', () => {
		expect(MYSQL_USER).toBe('admin');
		expect(MYSQL_PORT).toBe(3306);
		expect(MYSQL_PASSWORD).toBe('admin');
	});
	it('should redis variables be defined with default value', () => {
		expect(REDIS_HOST).toBe('localhost');
		expect(REDIS_PASSWORD).toBe('redis');
	});
	it('should domain variables be defined with default value', () => {
		expect(CURRENCY).toBe('BRL');
	});
	it('should env variables be defined with default value', () => {
		expect(JWT_SECRET).toBe('d0495cd085f1702f01b8fd32853');
		expect(JWT_EXPIRATION_IN_HOURS).toBe(2);
		expect(IS_TESTING).toBe(true);
		expect(IS_PRODUCTION).toBe(false);
		expect(PORT).toBe(3000);
		expect(PORT_TESTING).toBe(4800);
	});
});
