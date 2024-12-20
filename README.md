# CRUD Express TypeScript

This project is created to learn TypeScript by building a CRUD (Create, Read, Update, Delete) application using Express.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [License](#license)

## Introduction

This project is a basic CRUD application built with Express and TypeScript. It is designed to help you understand and work with TypeScript in a Node.js environment using Express.

## Features

- TypeScript for type safety and improved development experience
- Express as the web framework
- Prisma as the ORM
- JWT for authentication
- Joi for validation
- Winston for logging
- ESLint and Prettier for code quality and formatting
- Jest for testing

## Installation

1. Clone the repository:

```bash
git clone https://github.com/abdisetiakawan/crud-express-typescript.git
cd crud-express-typescript
```

2. Install the dependencies:

```bash
npm install
```

3. Setup environment variables:

Create a `.env` file in the root directory and add the necessary environment variables.

## Usage

To start the development server, run:

```bash
npm run dev
```

To build the project, run:

```bash
npm run build
```

To start the production server, run:

```bash
npm run prod
```

## Scripts

- `start`: Compiles TypeScript files in watch mode.
- `dev`: Starts the development server using `nodemon`.
- `lint`: Runs ESLint.
- `lint:fix`: Fixes linting issues.
- `build`: Compiles TypeScript files and copies `.env` to the build directory.
- `prod`: Starts the production server.
- `prepare`: Installs Husky hooks.
- `check-types`: Checks TypeScript types.
- `check-lint`: Checks linting issues.
- `check-format`: Checks code formatting.
- `format`: Formats code using Prettier.
- `test`: Runs Jest tests.

## Dependencies

- `@prisma/client`
- `bcrypt`
- `cors`
- `dotenv`
- `express`
- `express-async-handler`
- `joi`
- `jsonwebtoken`
- `winston`
- `winston-daily-rotate-file`

## Dev Dependencies

- `@eslint/js`
- `@types/bcrypt`
- `@types/cors`
- `@types/dotenv`
- `@types/express`
- `@types/jest`
- `@types/jsonwebtoken`
- `@types/node`
- `@types/supertest`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint`
- `eslint-config-import`
- `eslint-config-standard`
- `eslint-plugin-node`
- `eslint-plugin-promise`
- `eslint-plugin-standard`
- `globals`
- `husky`
- `jest`
- `nodemon`
- `prettier`
- `pretty-quick`
- `prisma`
- `supertest`
- `ts-jest`
- `ts-node`
- `typescript`
- `typescript-eslint`

## License

This project is licensed under the MIT License.
```

Feel free to customize it further to better fit your project's specifics.
