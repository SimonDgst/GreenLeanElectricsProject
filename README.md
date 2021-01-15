# GreenLeanElectricsProject

Project from the course Design of Dynamic Web Systems from LTU

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Prerequisites](#prerequisites)
- [Dependencies install](#dependencies-install)
- [Source files](#source-files)
- [Commands usage](#commands-usage)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Built With](#built-with)
- [Versioning](#versioning)
- [Author](#author)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Prerequisites

You must install theses libraries on your local machine:

- [NodeJS](https://nodejs.org/) using [NVM](https://github.com/nvm-sh/nvm)
- [Nodemon](https://www.npmjs.com/package/nodemon)

## Dependencies install

[NPM](https://getcomposer.org/) will download and install dependencies in the `./node_modules` directory.

## Source files

The sources files are divided in two folders : `frontend` and `backend`.

Each folders has its own dependencies and uses NPM to manage them.

The source code of each directory is located in the `src` folder.

## Commands usage

### Backend

To start the API:

```shell
nodemon serve
```

The backend API is running on port 3000: [http://localhost:3000/](http://localhost:3000/)

### Frontend

To start the frontend app:

```shell
ng serve
```

Frontend is running on port 4200: [http://localhost:4200/](http://localhost:4200/)

## Built With

- [NodeJS](https://nodejs.org/) & [Express](http://expressjs.com/) - NodeJS Framework
- [Angular](https://angular.io/) - Frontend framework
- [MongoDB](https://www.mongodb.com/) - SGBD
- [NPM](https://www.npmjs.com/) - Dependency management

## Versioning

We use [Git](https://git-scm.com/) for versioning.

## Author

- Simon Dugast - [Github](https://github.com/SimonDgst)
