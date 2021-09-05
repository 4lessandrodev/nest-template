import env from 'env-var';
const envVar = env.from(process.env, {}, env.logger);

export const JWT_EXPIRATION_IN_HOURS = envVar
	.get('JWT_EXPIRATION_IN_HOURS')
	.required()
	.default(2)
	.asIntPositive();
