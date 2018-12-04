const jsonFile = require("jsonfile");

module.exports = app => {
    var dbFile = './db/users.json';
    app.get('/users', (req, res) => {

        jsonFile.readFile(dbFile)
            .then(data => res.send(data))
            .catch(error => console.error(error))

    });
}