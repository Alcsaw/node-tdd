const { User } = require('../../src/app/models');

describe('Authentication', () => {
  it('should receive JWT token when authenticated with valid credentials', async () => {
    const user = await User.create({
      name: 'Augusto',
      email: 'test@hotmail.com',
      password_hash: '123123'
    });

    console.log(user);

    expect(user.email).toBe('test@hotmail.com');
  });
});

