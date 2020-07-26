`Bonjour` is a backend app built in Node.js, Express and MySQL which has [features](https://github.com/danielwetan/bonjour-backend#features) such as login / register using JWT, pasword hashing, CORS, etc. 

## :memo: Table Of Content
* [Prerequisites](https://github.com/danielwetan/bonjour-backend#prerequisites)
* [Installation](https://github.com/danielwetan/bonjour-backend#installation)
* [Features](https://github.com/danielwetan/bonjour-backend#features)
* [Built wtih](https://github.com/danielwetan/bonjour-backend#features)
* [Author](https://github.com/danielwetan/bonjour-backend#author)
* [License](https://github.com/danielwetan/bonjour-backend#license)

## Prerequisites
- Node.js installed on the local machine
- MySQL intalled on the local machine (ex. XAMPP)
## Installation
1. Clone this repository:
    `git clone https://github.com/danielwetan/bonjour-backend`
2. Install depedencies:
    `cd bonjour-backend & npm install`
3. Start XAMPP
4. Database configuration:
    * Open http://localhost/phpmyadmin in the browser
    * Create a new table with the name `bonjour`
    * Import database to current table, select `bonjour.sql` file from project folder
5. Start the server:
    `npm start`
6. Run app in the browser on the port http://localhost:3000

## Features
- [x] CRUD
- [x] Search, Sort, Pagination
- [x] Cors
- [x] Login/Register with JWT
- [x] Password hashing

## Built with
- [Node.js](http://nodejs.org/) - JavaScript runtime environment
- [Express.js](https://expressjs.com/) - Web framework
- [MySQL](https://www.mysql.com/) Database
- [JWT](https://jwt.io/) - Login/Register authentication
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js) - Password Hashing

## Author
- [Daniel Saputra](https://www.linkedin.com/in/danielwetan/)

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/danielwetan/bonjour-backend/blob/master/LICENSE) file for details
