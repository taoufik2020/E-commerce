const User = require('../models/user')

exports.getUser = (req,res) => {
    res.send('<h1 >hello les guard </h1>')
}
exports.singin = (req,res) => {

    console.log("body",req.body);
    const user = new User(req.body)
    user.save()
    .then((user) => res.status(200).send(user))
    .catch((error) => console.log(error.message))
}