# Sportshop Web Application
Main application on Vue with Nuxt (SSR).

## Table of contents
* [Release notes](#release-notes)
* [Prerequisites](#prerequisites)
* [Get the source code](#get-the-source-code)
* [Deployment on Docker](#deployment-on-docker)
* [Developing](#developing)
* [Tests](#tests)

## Release Notes
Please read the [CHANGELOG](CHANGELOG.md) for details.

## Prerequisites
- Docker >= 17.09
- Docker Compose >= 1.17

## Get the Source Code
Clone the repository:
```bash
git clone git@bitbucket.org:sportshop/sportshop.git
```

## Deployment on Docker
Create environment file and fill values:
```bash
cp .env.example .env
```

Create a network for docker services:
```bash
docker network create sportshop
```

Create a volume for docker database service:
```bash
docker volume create --name=sportshop_db_data
```

Run all the docker services:
```bash
docker-compose up -d
```

Open `http://localhost:8081`

## Developing

Build the application (compile the scripts, styles, assets):
```
npm run build
```

## Tests
TODO
