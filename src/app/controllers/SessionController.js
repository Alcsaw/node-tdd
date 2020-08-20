const { User } = require('../models');

class SessionController {
  async store(req, res) {
    /**
     * When loggin a user in, we need to check if its account
     * exists (findOne email) and if the entered password
     * corresponds to what's stored in the database. Being all
     * good, we return a JSON with the user data and its token.
     */
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ message: 'Incorrect password.' });
    }

    return res.json({
      user,
      token: user.generateToken()
    });
  }
};

module.exports = new SessionController();
