const jsonFile = require("jsonfile");
var dbFile = './db/users.json';

module.exports = app => {
    app.put("/user", (req, res) => {
        let user;
        let username = req.body.username;
        let email    = req.query.email;
      
        jsonFile.readFile(dbFile, function(err, content) {
          for (var i = content.length - 1; i >= 0; i--) {
            if (content[i].email === req.query.email) {
      
              console.log("updated user " + req.query.email + " has now username : " + username);
      
              user = content[i];
              user.username = username;
      
            }
          }
      
          jsonFile.writeFile(dbFile, content, function(err) {
            console.log(err);
          });
      
        });
        res.send(user);
      });


}