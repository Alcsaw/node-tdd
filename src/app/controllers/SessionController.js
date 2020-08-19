class SessionController {
  async store(req, res) {

    /*const { User } = require('../models');
    //import User from './app/models/User';

    const response = await User.create({
      name: 'Augusto',
      email: 'alcsaw2@hotmail.com',
      password_hash: '123456'
    });*/

    return res.status(200).send();
  }
};

module.exports = new SessionController();
