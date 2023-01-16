# E-commerce-back-end-ORM

## Table of Contents
- [Project Description](#description)
- [Usage information](#usage)
- [Project Demo](#demo)
- [Resources used](#resources)
- [License](#license)

## Description
This project was build to simulate an E-commerce API which allows full CRUD operations to the databse

## Usage
Before starting the application, all npm dependencies must be installed by running the following command in the terminal: 
```bash
npm i
```
Once all dependencies are installed, navigate to mySQL using:
```bash
mysql -u root -p
```
and then run the following command to initiate the database:
```bash
SOURCE db/schema.sql
```
Once the database has been initiated, quit out of mySQL in the terminal. 
In order to seed the database:
```bash
npm run seed
```
In order to start the application:
```bash
npm start
```

## Demo

The following media demonstrates the usage of this application

## Resources

Third Party resources used:
- mysql2: https://www.npmjs.com/package/mysql2
- sequalize: https://sequelize.org/
- dotenv: https://www.npmjs.com/package/dotenv
- expressJS: https://expressjs.com/
- Insomnia (for testing): https://docs.insomnia.rest/


## License
This project is lisenced under the [MIT license](https://opensource.org/licenses/MIT), please click on the link to find out more.