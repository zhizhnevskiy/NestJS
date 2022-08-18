## NestJS Project
## Documentation
```bash
http://localhost:5000/api/docs
```
## Installation:
```bash
# install Nest
$ npm i -g @nestjs/cli
# Create new project:
$ nest new project-name
# production mode
$ npm run start
# watch mode
$ npm run start:dev
```

## Databases:
```bash
# mysql
$ npm install --save @nestjs/sequelize sequelize sequelize-typescript mysql2
# postgres
$ npm install --save pg pg-hstore 
# sequelize
$ npm install --save-dev @types/sequelize
```

## Command for Nest CLI:
```bash
$ nest generate module users
$ nest generate controller users
$ nest generate service users
```

## Helpers:
```bash
# For Config
$ npm i @nestjs/config
# For ENV generator for package.json
$ npm i cross-env
# For create documentation
$ npm i @nestjs/swagger swagger-ui-express
# For jwt token and crypt password https://jwt.io/
$ npm i @nestjs/jwt bcryptjs
# For validation and transform data
$ npm i class-validator class-transformer
# For create random name for file
$ npm i uuid
# For show folder with img "static" in browser
$ npm i --save @nestjs/serve-static
```