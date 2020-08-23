const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
  /**
   * password is a virtual field, so it only exists when
   * the model is using it. We make the hash of the password,
   * using the hook beforeSave, and only store that in the database
   */
  const User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.VIRTUAL,
    password_hash: DataTypes.STRING,
  }, {
    hooks: {
      beforeSave: async user => {
        if (user.password) {
          user.password_hash = await bcrypt.hash(user.password, 8);
          user.password = null;
        }
      }
    }
  });

  User.prototype.checkPassword = function (password) {
    /**
     * Here, we're defining a new method for the model `User`
     * that is meant to be used by the SessionController for
     * comparing passwords in authentication. We defined it here
     * for decoupling that code from the controller
     */
    return bcrypt.compare(password, this.password_hash);
  }

  User.prototype.generateToken = function () {
    /**
     * Same as above, but in this case we want to generate the
     * user's token for login and also return its ID
     */
    return jwt.sign({ id: this.id }, process.env.APP_SECRET);
  }

  return User;
};
