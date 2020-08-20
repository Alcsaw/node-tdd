const { factory } = require('factory-girl');
const faker = require('faker');

const { User } = require('../src/app/models');

/**
 * Factories are used to create an instance of an object for mocking
 * porpouses. Faker is a library for randomly creating properties for
 * these objects. For example, here we're a creating a random user for
 * testing a session integration test. Then in every test we need an
 * instance of a user, we can use factory.create('User') to create one
 * quickly and randomly. To overwrite a specific property, we can pass
 * it as an object in the second parameter, e.g.:
 * const user = await factory.create('User', { password: '123123' });
 */

factory.define('User', User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password()
});

module.exports = factory;
