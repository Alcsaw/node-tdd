const { factory } = require('factory-girl');
const { User } = require('../src/app/models');

factory.define('User', User, {
  name: 'Augusto',
  email: 'alcsaw@hotmail.com',
  password: '123456'
});

module.exports = factory;
