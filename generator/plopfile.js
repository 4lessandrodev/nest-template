module.exports = function (plop) {
	plop.setGenerator('resource', {
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What is the module or resource name?'
			},
			{
				type: 'list',
				name: 'option',
				message: 'Select your option?',
				choices: [
					{
						type: 'confirm',
						name: 'module',
						message: 'Do you want Domain Module?'
					},
					{
						type: 'confirm',
						name: 'valueObject',
						message: 'Do you want valueObject?'
					},
					{
						type: 'confirm',
						name: 'aggregate',
						message: 'Do you want Aggregate?'
					},
					{
						type: 'confirm',
						name: 'entity',
						message: 'Do you want Entity?'
					},
					{
						type: 'confirm',
						name: 'useCase',
						message: 'Do you want Use Case?'
					},
					{
						type: 'confirm',
						name: 'mapper',
						message: 'Do you want Mapper?'
					}
				]
			}
		],
		actions: function (data) {
			const actions = [];
			const { option } = data;
			if (option === 'valueObject') {
				actions.push(
					{
						type: 'add',
						path: '../src/modules/{{dashCase name}}/domain/value-objects/{{dashCase name}}.value-object.ts',
						templateFile: './templates/domain/value-objects/value-object.hbs'
					},
					{
						type: 'add',
						path: '../src/modules/{{dashCase name}}/domain/value-objects/tests/{{dashCase name}}.value-object.spec.ts',
						templateFile: './templates/domain/value-objects/tests/value-object.spec.hbs'
					}
				);
			} else if (option === 'aggregate') {
				actions.push(
					{
						type: 'add',
						path: '../src/modules/{{dashCase name}}/domain/aggregates/{{dashCase name}}.aggregate.ts',
						templateFile: './templates/domain/aggregates/aggregate.hbs'
					},
					{
						type: 'add',
						path: '../src/modules/{{dashCase name}}/domain/aggregates/tests/{{dashCase name}}.aggregate.spec.ts',
						templateFile: './templates/domain/aggregates/tests/aggregate.spec.hbs'
					}
				);
			} else if (option === 'entity') {
				actions.push(
					{
						type: 'add',
						path: '../src/modules/{{dashCase name}}/domain/entities/{{dashCase name}}.entity.ts',
						templateFile: './templates/domain/entities/entity.hbs'
					},
					{
						type: 'add',
						path: '../src/modules/{{dashCase name}}/domain/entities/tests/{{dashCase name}}.entity.spec.ts',
						templateFile: './templates/domain/entities/tests/entity.spec.hbs'
					}
				);
			} else if (option === 'useCase') {
				actions.push(
					{
						type: 'add',
						path: '../src/modules/{{dashCase name}}/application/use-cases/create-{{dashCase name}}.dto.ts',
						templateFile: './templates/application/use-cases/dto.hbs'
					},
					{
						type: 'add',
						path: '../src/modules/{{dashCase name}}/application/use-cases/create-{{dashCase name}}.use-case.ts',
						templateFile: './templates/application/use-cases/use-case.hbs'
					},
					{
						type: 'add',
						path: '../src/modules/{{dashCase name}}/application/use-cases/tests/create-{{dashCase name}}.use-case.spec.ts',
						templateFile: './templates/application/use-cases/tests/use-case.spec.hbs'
					}
				);
			} else if (option === 'mapper') {
				actions.push(
					{
						type: 'add',
						path: '../src/modules/{{dashCase name}}/infra/mappers/tests/{{dashCase name}}.mapper.spec.ts',
						templateFile: './templates/infra/mappers/tests/mapper.spec.hbs'
					},
					{
						type: 'add',
						path: '../src/modules/{{dashCase name}}/infra/mappers/{{dashCase name}}.mapper.ts',
						templateFile: './templates/infra/mappers/mapper.hbs'
					}
				);
			} else {
				actions.push(
					{
						type: 'add',
						path: '../src/modules/{{dashCase name}}/application/use-cases/create-{{dashCase name}}.dto.ts',
						templateFile: './templates/application/use-cases/dto.hbs'
					},
					{
						type: 'add',
						path: '../src/modules/{{dashCase name}}/application/use-cases/create-{{dashCase name}}.use-case.ts',
						templateFile: './templates/application/use-cases/use-case.hbs'
					},
					{
						type: 'add',
						path: '../src/modules/{{dashCase name}}/application/use-cases/tests/create-{{dashCase name}}.use-case.spec.ts',
						templateFile: './templates/application/use-cases/tests/use-case.spec.hbs'
					},
					{
						type: 'add',
						path: '../src/modules/{{dashCase name}}/domain/aggregates/{{dashCase name}}.aggregate.ts',
						templateFile: './templates/domain/aggregates/aggregate.hbs'
					},
					{
						type: 'add',
						path: '../src/modules/{{dashCase name}}/domain/aggregates/tests/{{dashCase name}}.aggregate.spec.ts',
						templateFile: './templates/domain/aggregates/tests/aggregate.spec.hbs'
					},
					{
						type: 'add',
						path: '../src/modules/{{dashCase name}}/domain/entities/{{dashCase name}}.entity.ts',
						templateFile: './templates/domain/entities/entity.hbs'
					},
					{
						type: 'add',
						path: '../src/modules/{{dashCase name}}/domain/entities/tests/{{dashCase name}}.entity.spec.ts',
						templateFile: './templates/domain/entities/tests/entity.spec.hbs'
					},
					{
						type: 'add',
						path: '../src/modules/{{dashCase name}}/domain/repo/{{dashCase name}}.repo.ts',
						templateFile: './templates/domain/repo/repo.hbs'
					},
					{
						type: 'add',
						path: '../src/modules/{{dashCase name}}/domain/value-objects/{{dashCase name}}.value-object.ts',
						templateFile: './templates/domain/value-objects/value-object.hbs'
					},
					{
						type: 'add',
						path: '../src/modules/{{dashCase name}}/domain/value-objects/tests/{{dashCase name}}.value-object.spec.ts',
						templateFile: './templates/domain/value-objects/tests/value-object.spec.hbs'
					},
					{
						type: 'add',
						path: '../src/modules/{{dashCase name}}/infra/mappers/tests/{{dashCase name}}.mapper.spec.ts',
						templateFile: './templates/infra/mappers/tests/mapper.spec.hbs'
					},
					{
						type: 'add',
						path: '../src/modules/{{dashCase name}}/infra/mappers/{{dashCase name}}.mapper.ts',
						templateFile: './templates/infra/mappers/mapper.hbs'
					},
					{
						type: 'add',
						path: '../src/modules/{{dashCase name}}/infra/models/{{dashCase name}}.model.ts',
						templateFile: './templates/infra/models/model.hbs'
					},
					{
						type: 'add',
						path: '../src/modules/{{dashCase name}}/infra/repo/{{dashCase name}}.repo.ts',
						templateFile: './templates/infra/repo/repo.hbs'
					},
					{
						type: 'add',
						path: '../src/modules/{{dashCase name}}/infra/repo/tests/{{dashCase name}}.repo.spec.ts',
						templateFile: './templates/infra/repo/tests/repo.spec.hbs'
					},
					{
						type: 'add',
						path: '../src/modules/{{dashCase name}}/{{dashCase name}}.module.ts',
						templateFile: './templates/module.hbs'
					},
					{
						type: 'add',
						path: '../src/modules/{{dashCase name}}/{{dashCase name}}.service.ts',
						templateFile: './templates/service.hbs'
					},
					{
						type: 'add',
						path: '../src/modules/{{dashCase name}}/infra/graphql/{{dashCase name}}.resolver.ts',
						templateFile: './templates/infra/graphql/resolver.hbs'
					},
					{
						type: 'add',
						path: '../src/modules/{{dashCase name}}/infra/graphql/args/get-{{dashCase name}}.arg.ts',
						templateFile: './templates/infra/graphql/args/arg.hbs'
					},
					{
						type: 'add',
						path: '../src/modules/{{dashCase name}}/infra/graphql/inputs/create-{{dashCase name}}.input.ts',
						templateFile: './templates/infra/graphql/inputs/input.hbs'
					},
					{
						type: 'add',
						path: '../src/modules/{{dashCase name}}/infra/graphql/types/{{dashCase name}}.type.ts',
						templateFile: './templates/infra/graphql/types/type.hbs'
					}
				);
			}

			return actions;
		}
	});
};
