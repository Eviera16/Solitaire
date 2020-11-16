const User = require('../models/user.model');
const jwt = require("jsonwebtoken");

module.exports = {
    index: (req, res) => {
        console.log("In the controller");
        User.find()
            .then(data => res.json({ results: data }))
            .catch(err => res.json(err.errors))
    },
    register: (req, res) => {
        console.log("In controller register");
        User.create(req.body)
            .then(user => {
                const userToken = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
                res
                    .cookie("userToken", userToken, secret, {
                        httpOnly: true
                    })
                    .json({ msg: "success!", user:  {
                        name: user.name,
                        email: user.email,
                        password: user.password
                    }
 });
            })
            .catch(err => res.json(err))
    },
    show: (req, res) => {
        User.findOne({ _id: req.params.id })
            .then(data => res.json({ results: data }))
            .catch(err => res.json(err.errors))

    },
    update: (req, res) => {
        User.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true, useFindAndModify: false })
            .then(data => res.json({ results: data }))
            .catch(err => res.json(err.errors))

    },
    destroy: (req, res) => {
        User.deleteOne({ _id: req.params.id })
            .then(data => res.json({ results: data }))
            .catch(err => res.json(err.errors))
    }
}