const checkName = (req, res, next) => {
    if (!req.body.first_name || !req.body.last_name) {
        res.status(404).send({ error: 'Full name is required' });
    } else {
        next();
    }
};

const checkEmail = (req, res, next) => {
    if (!req.body.email) {
        res.status(404).send({ error: 'Email is required' });
    } else {
        next();
    }
}

const checkDob = (req, res, next) => {
    if (!req.body.dob) {
        res.status(404).send({ error: 'Date of birth is required' });
    } else {
        next();
    }
}

const checkPassword = (req, res, next) => {
    if (!req.body.password) {
        res.status(404).send({ error: 'Password is required' });
    } else {
        next();
    }
}

const checkPhoneNumber = (req, res, next) => {
    if (!req.body.phone_number) {
        res.status(404).send({ error: 'Phone number is required' });
    } else {
        next();
    }
}

module.exports = { checkName, checkEmail, checkDob, checkPassword, checkPhoneNumber};