const jsonFile = require("jsonfile");
var dbFile = './db/users.json';

module.exports = app => {

    app.delete("/users/destroy", (req, res) => {

        let email = req.body.email;
    
        jsonFile.readFile(dbFile, function(err, content) {
    
          for (var i = content.length - 1; i >= 0; i--) {
    
            if (content[i].email === email) {
              console.log("removing " + content[i].email + "from DB");
              content.pop(i);
            }
    
          }
    
          jsonFile.writeFile(dbFile, content, function(err) {
            console.log(err);
          });
    
          res.sendStatus(200);
        });
      });


}