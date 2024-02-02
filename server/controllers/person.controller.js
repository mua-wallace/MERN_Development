const Person = require('../models/person.model');

module.exports.hello_world = (req, res)  =>{
    res.json({
        message: "This is a message from the server"
    })
}
module.exports.createPerson = (req, res) => {
    Person.create(req.body)
    .then(person => res.json(person))
    .catch((err) => res.json(err));
}

module.exports.getAllPersons = (req, res) => {
    Person.find({})
    .then((persons) => {
        res.json(persons)
    })
    .catch((err) => {
        res.json(err)
    })
}
module.exports.getOnePerson = (req, res) => {
    Person.findOne({_id: req.params.id})
    .then((person) => {
        res.json(person)
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports.updatePerson =(req, res) => {
    Person.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then((updatedPerson) => {
        res.json(updatedPerson)
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports.deletePerson =(req, res) =>{
    Person.deleteOne({_id: req.params.id})
    .then((confirmation) => {
        res.json(confirmation)
    })
    .catch((err) => {
        res.json(err)
    })
}


