const admin = require('firebase-admin');

module.exports = function(req, res) {
  if (!req.body.phone) {
    return res.status(422).send({ error: 'Enter a Valid Phone' });
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, '');

  admin
    .auth()
    .getUser(phone)
    .then(() => {
      return admin
        .database()
        .ref('drivers/' + phone)
        .on('value', snapshot => {
          res.send(snapshot.val());
        });
    })
    .catch(err => res.status(422).send({ error: err }));
};
