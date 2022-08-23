# NestJS Project
### Documentation:
```bash
http://localhost:5000/api/docs
```
### Project Installation:
```bash
# Install all npm packages
$ npm install
# Start all migrations
$ npm run migration:all
# Start all seeds
$ npm run seed:all
# Start watch mode
$ npm run start:dev
# Start production
$ npm run start
# create .production.env and .development.env with help of .example.env
```

# General information about nest:

### Install NestJS and create project:
```bash
# Install Nest
$ npm i -g @nestjs/cli
# Create new project:
$ nest new project-name
```

### Databases:
```bash
# mysql
$ npm install --save mysql2
# postgres
$ npm install --save pg pg-hstore 
# for using sequelize
$ npm install --save @nestjs/sequelize sequelize sequelize-cli sequelize-typescript
$ npm install --save-dev @types/sequelize
# create migrations
$ npx sequelize-cli migration:generate --name create-roles
# run migrations
$ npx sequelize-cli db:migrate
# create seed
$ npx sequelize-cli seed:generate --name demo-user
# run seed
$ npx sequelize-cli db:seed:all
```

### Command for Nest CLI:
```bash
$ npx nest generate module users
$ npx nest generate controller users
$ npx nest generate service users
```

### Helpers:
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
# For parse .env
$ npm install dotenv --save
```