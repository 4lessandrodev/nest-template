# Nest App Template

Template to start a new app using Nest
> Application run on localhost:3000/graphql

* NestJS
* Jest
* Graphql Request
* Husky
* Commit-Lint
* Module-Alias
* Typescript
* Lint Staged
* Types-DDD
* DDD Module Generator
* Graphql
* EnvVar
* Env-cmd
* Stryker Mutator
* Graphql Codegen
* Docker

## How to use this template

Docker is configured on this repo
Ensure you have a database or use docker-compose to up a database instance

* Clone this template
* `$ git clone https://github.com/4lessandrodev/nest-template.git <project-name>`
* Access project folder
* `$ cd <project-name>`
* Create your env file on root folder
* `$ cp ./.env.example ./.env`
* Install dependencies
* `$ yarn`
* Start app
* `$ yarn start:dev`
* Access playground
* `localhost:3000/graphql`

### Create new modules

* Generate your module
* `$ yarn generate <module-name>`

### Running tests

* Unit tests
* `$ yarn test`
* Mutation tests
* `$ yarn test:mutation`
* End to end
* `$ yarn test:e2e`

### Generate graphql types

This template is configured with graphql codegen.
> Run application before generate types

* Generate types
* `$ yarn generate:gql`

### Alias to import files

Available alias to import files

* From modules folder use: `@modules/...`
* From src folder use: `@app/...`
* From config folder use: `@config/...`
* From shared folder use: `@shared/...`
