const admin = require('firebase-admin');

module.exports = function(req, res) {
  if (!req.body.phone || !req.body.code) {
    return res
      .status(422)
      .send({ error: 'Phone and Code needs to be provided' });
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, '');
  const code = parseInt(req.body.code);

  admin
    .auth()
    .getUser(phone)
    .then(() => {
      return admin
        .database()
        .ref('drivers/' + phone)
        .on('value', snapshot => {
          admin
            .database()
            .ref('drivers/' + phone)
            .off();
          const user = snapshot.val();

          if (user.code !== code || !user.codeValid) {
            return res.status(422).send({ error: 'Code is not valid' });
          }
          admin.database().ref('drivers/' + phone);
          //    .update({ codeValid: false });
          return admin
            .auth()
            .createCustomToken(phone)
            .then(token => res.send({ token: token }));
        });
    })
    .catch(() => res.status(422).send({ error: err }));
};
