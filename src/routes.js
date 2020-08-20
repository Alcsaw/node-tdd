//import { Router } from 'express';
const routes = require("express").Router();

const authMiddleware = require('./app/middlewares/auth');

const SessionController = require('./app/controllers/SessionController');

routes.post('/sessions', SessionController.store);
/**
 * The '/sessions' route is not private. We need to access it when
 * not yet logged in. But the dashboard, for instance, has private
 * content, so we need to define that route after `using` our
 * authMiddleware. After that, all routes are considered privates.
 */

routes.use(authMiddleware);

routes.get('/dashboard', (req, res) => {
  return res.status(200).send();
});

module.exports = routes;
//export default routes;