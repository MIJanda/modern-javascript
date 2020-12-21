// JavaScript under the hood in implementing OOP with classes using prototypes

// constructor function
function User(username, email) {
    this.username = username;
    this.email = email;
}

// prototype methods
User.prototype.login = function() {
    console.log(`${this.username} has logged in...`);
    return this;
}

User.prototype.logout = function() {
    console.log(`${this.username} has logged out...`);
    return this;
}

const userOne = new User('ryu', 'ryu@proto.co.ug');
const userTwo = new User('chun-li', 'chun@proto.co.ug');

console.log(userOne, userTwo);

userTwo.login().logout();
