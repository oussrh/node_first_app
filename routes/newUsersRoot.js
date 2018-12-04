const jsonFile = require("jsonfile");

module.exports = app => {

app.post("/users/new", (req, res) => {
    var dbFile = './db/users.json';
    let email    = req.body.email
    let username = req.body.username
  
    jsonFile.readFile(dbFile, function(err, content) {
  
      content.push({ email: email, username: username });
  
      console.log("added " + email + "to DB");
  
      jsonFile.writeFile(dbFile, content, function(err) {
        console.log(err);
      });
  
      res.sendStatus(200);
    });
  });

}