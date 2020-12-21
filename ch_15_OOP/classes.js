class User {
    constructor (username, email) {
        this.username = username;
        this.email = email;
    }

    login () {
        console.log(`${this.username} just logged in...`);
    }

    logout () {
        console.log(`${this.username} just logged out...`);
    }
}

const userOne = new User('mario', 'mario@classes.co.ug');
userOne.login();

const userTwo = new User('luigi', 'luigi@classes.co.ug');
userTwo.login();

console.log(userOne, userTwo);

userOne.logout();
userTwo.logout();