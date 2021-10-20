// Stryker disable all
import * as env from 'env-var';
const envVar = env.from(process.env, {}, env.logger);

// ***************************************************
// Jwt variables
export const JWT_EXPIRATION_IN_HOURS = envVar
	.get('JWT_EXPIRATION_IN_HOURS')
	.default(2)
	.required()
	.asIntPositive();

export const JWT_SECRET = envVar
	.get('JWT_SECRET')
	.default('d0495cd085f1702f01b8fd32853')
	.required()
	.asString();

// ***************************************************
// Database name defined for all databases
export const DB_NAME = envVar.get('DB_NAME')
	.default('db')
	.required()
	.asString();

// ***************************************************
// Mongodb variables
export const MONGO_PASSWORD = envVar.get('MONGO_PASSWORD')
	.default('mongo')
	.required()
	.asString();

export const MONGO_USER = envVar.get('MONGO_USER')
	.default('mongo')
	.required()
	.asString();

export const MONGO_HOST = envVar.get('MONGO_HOST')
	.default('localhost')
	.required()
	.asString();

export const MONGO_PORT = envVar.get('MONGO_PORT')
	.default(27017)
	.required()
	.asPortNumber();

// ***************************************************
// Server variables
export const PORT = envVar.get('PORT')
	.default(3000)
	.required()
	.asPortNumber();

export const PORT_TESTING = envVar.get('PORT_TESTING')
	.default(4800)
	.required()
	.asPortNumber();

export const IS_PRODUCTION = envVar.get('IS_PRODUCTION')
	.default('false')
	.required()
	.asBoolStrict();

export const IS_TESTING = envVar.get('IS_TESTING')
	.default('false')
	.required()
	.asBoolStrict();

// ***************************************************
// Business variables
export const CURRENCY = envVar.get('CURRENCY')
	.default('BRL')
	.required()
	.asEnum(['BRL', 'USD', 'EUR', 'JPY']);

// ***************************************************
// Postgres variables
export const PSQL_PASSWORD = envVar.get('PSQL_PASSWORD')
	.default('postgres')
	.required()
	.asString();

export const PSQL_USER = envVar.get('PSQL_USER')
	.default('postgres')
	.required()
	.asString();

export const PSQL_HOST = envVar.get('PSQL_HOST')
	.default('localhost')
	.required()
	.asString();

export const PSQL_PORT = envVar.get('PSQL_PORT')
	.default(5432)
	.required()
	.asPortNumber();

// ***************************************************
// Mysql variables
export const MYSQL_PASSWORD = envVar.get('MYSQL_PASSWORD')
	.default('admin')
	.required()
	.asString();

export const MYSQL_USER = envVar.get('MYSQL_USER')
	.default('admin')
	.required()
	.asString();

export const MYSQL_HOST = envVar.get('MYSQL_HOST')
	.default('localhost')
	.required()
	.asString();

export const MYSQL_PORT = envVar.get('MYSQL_PORT')
	.default(3306)
	.required()
	.asPortNumber();

// ***************************************************
// Redis variables
export const REDIS_PASSWORD = envVar.get('REDIS_PASSWORD')
	.default('redis')
	.required()
	.asString();

export const REDIS_HOST = envVar.get('REDIS_HOST')
	.default('localhost')
	.required()
	.asString();

export const REDIS_PORT = envVar.get('REDIS_PORT')
	.default(6379)
	.required()
	.asPortNumber();
