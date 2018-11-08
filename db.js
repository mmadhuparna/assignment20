var db = [];

db.push({
  username: "madhu",
  password: "password",
  email: "mmadhuparna@yahoo.com",
  firstname: "madhuparna",
  lastname: "maji",
  id: "1"
});

var usersCollection ={
  //function to create new user
  createUser: function(user) {
    user.id = db.length + 1;
    db.push(user);
    return user;
  },

  getUser: function(id) {
    //function to get the data of requested user
    for (var i = 0; i < db.length; i++) {
      var user = db[i];
      if (user.id == id) {
        return user;
    }}
  },
//function to return all users
  getUsers: function() {
    return db;
  }
 
};

module.exports = usersCollection;
