const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Prosumer = require('../models/prosumer');

//Creation of a prosumer account

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10) //the higher salt is the higher the password will be secured
        .then(hash => {
            const prosumer = new Prosumer({
                email: req.body.email,
                password: hash
            });
            prosumer.save()
                .then(() => res.status(201).json({ message: 'Prosumer account created !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

//Connection to a prosumer account

exports.login = (req, res, next) => {
    Prosumer.findOne({ email: req.body.email }) //Look into the database if the email is saved
        .then(prosumer => {
            if (!prosumer) {
                return res.status(401).json({ error: 'Prosumer account not found' });
            }
            bcrypt.compare(req.body.password, prosumer.password) //If the email is found, then the password is checked using bcrypt compare function
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Incorrect password' });
                    }
                    res.status(200).json({
                        userId: prosumer._id,
                        token: jwt.sign(
                            { userId: prosumer._id }, //to be sure that the token is corresponding to the right user
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};