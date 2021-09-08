import {
	BadRequestException,
	ConflictException,
	ForbiddenException,
	InternalServerErrorException,
	NotFoundException,
	UnauthorizedException
} from '@nestjs/common';
import { Result } from 'types-ddd';

export const HandlerErrorOnFailure = (result: Result<any, string>): void => {
	if (result.isFailure) {
		switch (result.isFailure) {
		case result.statusCode === 'CONFLICT':
			throw new ConflictException(result.errorValue());

		case result.statusCode === 'BAD_REQUEST':
			throw new BadRequestException(result.errorValue());

		case result.statusCode === 'FORBIDDEN':
			throw new ForbiddenException(result.errorValue());

		case result.statusCode === 'NOT_FOUND':
			throw new NotFoundException(result.errorValue());

		case result.statusCode === 'UNAUTHORIZED':
			throw new UnauthorizedException(result.errorValue());
		default:
			throw new InternalServerErrorException(result.errorValue());
		}
	}
};

export default HandlerErrorOnFailure;