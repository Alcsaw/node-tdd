const { User } = require('../models');

class UserController {
  async store(req, res) {
    const { name, email, password } = req.body;

    if (!(name && email && password)) {
      return res.status(400).json({ message: 'Missing a required field' });
    }

    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(401).json({ message: 'E-mail already in use' });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    return res.json(user);
  }
};

module.exports = new UserController();
