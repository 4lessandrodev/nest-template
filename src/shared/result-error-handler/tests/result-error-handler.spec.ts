import HandlerErrorOnFailure from '../result-error-handler';
import { Result, ErrorStatus } from 'types-ddd';

describe('result-error-handler', () => {
	it('should be defined', () => {
		const handleChecker = HandlerErrorOnFailure;
		expect(handleChecker).toBeDefined();
	});

	it('should return CONFLICT', () => {
		const handleChecker = () => HandlerErrorOnFailure(Result.fail('Conflict', 'CONFLICT'));
		expect(handleChecker).toThrowError('Conflict');
	});

	it('should return BAD_REQUEST', () => {
		const handleChecker = () => HandlerErrorOnFailure(Result.fail('Bad Request', 'BAD_REQUEST'));
		expect(handleChecker).toThrowError('Bad Request');
	});

	it('should return FORBIDDEN', () => {
		const handleChecker = () => HandlerErrorOnFailure(Result.fail('Forbidden', 'FORBIDDEN'));
		expect(handleChecker).toThrowError('Forbidden');
	});

	it('should return NOT_FOUND', () => {
		const handleChecker = () => HandlerErrorOnFailure(Result.fail('Not Found', 'NOT_FOUND'));
		expect(handleChecker).toThrowError('Not Found');
	});

	it('should return UNAUTHORIZED', () => {
		const handleChecker = () => HandlerErrorOnFailure(Result.fail('Unauthorized', 'UNAUTHORIZED'));
		expect(handleChecker).toThrowError('Unauthorized');
	});

	it('should return UNPROCESSABLE_ENTITY', () => {
		const handleChecker = () => HandlerErrorOnFailure(Result.fail('Unprocessable Entity', 'UNPROCESSABLE_ENTITY'));
		expect(handleChecker).toThrowError('Unprocessable Entity');
	});

	it('should return PRECONDITION_FAILED', () => {
		const handleChecker = () => HandlerErrorOnFailure(Result.fail('Precondition Failed', 'PRECONDITION_FAILED'));
		expect(handleChecker).toThrowError('Precondition Failed');
	});

	it('should return INTERNAL_SERVER_ERROR', () => {
		const handleChecker = () => HandlerErrorOnFailure(Result.fail('Internal Server Error', 'NOT_ACCEPTABLE'));
		expect(handleChecker).toThrowError('Internal Server Error');
	});

	it('should return INTERNAL_SERVER_ERROR', () => {
		const handleChecker = () => HandlerErrorOnFailure(Result.fail('Internal Server Error', 'INTERNAL_SERVER_ERROR'));
		expect(handleChecker).toThrowError('Internal Server Error');
	});

	it('should return INTERNAL_SERVER_ERROR', () => {
		const handleChecker = () => HandlerErrorOnFailure(Result.fail('Internal Server Error', '' as ErrorStatus));
		expect(handleChecker).toThrowError('Internal Server Error');
	});

	it('should return OK', () => {
		const handleChecker = () => HandlerErrorOnFailure(Result.ok('Success'));
		expect(handleChecker).not.toThrow();
		expect(handleChecker().isSuccess).toBeTruthy();
	});

	it('should return SUCCESS', () => {
		const handleChecker = () => HandlerErrorOnFailure(Result.success());
		expect(handleChecker).not.toThrow();
		expect(handleChecker().isSuccess).toBeTruthy();
	});
});
