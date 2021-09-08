import * as env from 'env-var';
const envVar = env.from(process.env, {}, env.logger);

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
