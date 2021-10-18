import { CatResolver } from '@modules/cats/cat.resolver';

describe('cat.resolver', () => {
	it('should get a cat', async () => {
		const resolver = new CatResolver();
		const cat = await resolver.cat();
		expect(cat).toEqual({ id: 1, name: 'Meow' });
	});

	it('should get a cat', async () => {
		const resolver = new CatResolver();
		const cat = await resolver.cat();
		expect(cat.id).toBe(1);
		expect(cat.name).toBe('Meow');
	});
});
