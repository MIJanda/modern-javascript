class User {
    constructor (username, email) {
        this.username = username;
        this.email = email;
        this.score = 0;
    }

    login () {
        console.log(`${this.username} just logged in...`);
        return this;
    }

    logout () {
        console.log(`${this.username} just logged out...`);
        return this;
    }

    incScore () {
        this.score++;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
}

const userOne = new User('mario', 'mario@classes.co.ug');
userOne.login().incScore().incScore().logout();

const userTwo = new User('luigi', 'luigi@classes.co.ug');
userTwo.login().incScore().logout();