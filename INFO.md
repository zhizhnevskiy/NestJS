## Install Nest:
- npm i -g @nestjs/cli
## Create new project:
- nest new project-name
## Run project for developing
- npm run start:dev
## Add for Databases:
// mysql
- npm install --save @nestjs/sequelize sequelize sequelize-typescript mysql2

// postgres
- npm install --save pg pg-hstore 
- npm install --save-dev @types/sequelize
## Command for Nest CLI
- nest generate module users
- nest generate controller users
- nest generate service users
## Add Config
- npm i @nestjs/config
## Add ENV generator for package.json
- npm i cross-env