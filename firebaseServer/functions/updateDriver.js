const admin = require('firebase-admin');

module.exports = function(req, res) {
  if (!req.body.phone) {
    return res.status(422).send({ error: 'Enter a Valid Phone' });
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, '');

  admin
    .auth()
    .getUser(phone)
    .then(userRecord => {
      const name = 'Driver1';
      return admin
        .database()
        .ref('drivers/' + phone)
        .update({ name: name, state: 'Bangalore' }, () => {
          res.send({ success: true });
        });
    })
    .catch(err => res.status(422).send({ error: err }));
};
