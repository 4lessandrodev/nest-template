import {
	BadRequestException,
	ConflictException,
	ForbiddenException,
	InternalServerErrorException,
	NotFoundException,
	PreconditionFailedException,
	UnauthorizedException,
	UnprocessableEntityException
} from '@nestjs/common';
import { Result } from 'types-ddd';

export const HandlerErrorOnFailure = <T = unknown, F = unknown>(result: Result<T, F>): Result<T, F> => {
	if (result instanceof Result && result.isFailure) {
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

		case result.statusCode === 'UNPROCESSABLE_ENTITY':
			throw new UnprocessableEntityException(result.errorValue());

		case result.statusCode === 'PRECONDITION_FAILED':
			throw new PreconditionFailedException(result.errorValue());

		default:
			throw new InternalServerErrorException(result.errorValue());
		}
	}
	return result;
};

export default HandlerErrorOnFailure;
