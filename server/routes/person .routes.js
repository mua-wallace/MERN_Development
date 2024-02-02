const PersonController = require('../controllers/person.controller');

module.exports = (app) => {
    app.post('/api/person', PersonController.createPerson),
    app.get('/api/person', PersonController.getAllPersons),
    app.get('/api/person/:id', PersonController.getOnePerson),
    app.patch('/api/person/edit/:id', PersonController.updatePerson),
    app.delete('/api/person/:id', PersonController.deletePerson),
    app.get('/api/', PersonController.hello_world)
}