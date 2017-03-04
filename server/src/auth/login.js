// import npm passport module
import passport from 'passport';

// export function default
export default (app) => {
  app.post('/api/login', passport.authenticate('local'), (req, res) => {
    res.send(req.user);
    if (req.user) {
      res.send({user: req.user});
    } else {
      res.status(401).send({error: 'Error logging in!'});
    }
  });
};
