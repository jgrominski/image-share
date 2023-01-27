#! /usr/bin/env node

console.log('This script populates some test data to your database.');

const async = require('async');
const User = require('./models/user');
const Image = require('./models/image');

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const mongoDB = process.env.DATABASE;

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(mongoDB);
}

const users = []
const images = []

function userCreate(username, password, email, cb) {
    const user = new User({
        username: username,
        password: password,
        email: email
    });

    user.save(function (err) {
        if (err) {
            cb(err, null);
            return;
        }
        console.log('New User: ' + user);
        users.push(user);
        cb(null, user);
    });
}

function imageCreate(user, link, visibility, cb) {
    imagedetail = {
        user: user,
        link: link
    };
    if (visibility != false)
        imagedetail.visibility = visibility;

    const image = new Image(imagedetail);
    image.save(function (err) {
        if (err) {
            cb(err, null);
            return;
        }
        console.log('New Image: ' + image);
        images.push(image);
        cb(null, image);
    });
}


function createUsers(cb) {
    async.series([
        function (callback) {
            userCreate('picasso', 'Password123', 'picasso@art.com', callback);
        },
        function (callback) {
            userCreate('markrothko', 'Square321', 'mark.rothko@gmail.com', callback);
        },
        function (callback) {
            userCreate('vincent', 'Vincent1853', 'vincent@example.com', callback);
        }
    ],
        cb);
}


function createImages(cb) {
    async.parallel([
        function (callback) {
            imageCreate(users[0], '/images/7japmqnw4a.jpg', 'Private', callback);
        },
        function (callback) {
            imageCreate(users[0], '/images/t8ofpcrfna.jpg', 'Public', callback);
        },
        function (callback) {
            imageCreate(users[1], '/images/3h1f4rv89u.jpg', 'Private', callback);
        },
        function (callback) {
            imageCreate(users[1], '/images/vpyqrbbvyaj.jpg', 'Public', callback);
        },
        function (callback) {
            imageCreate(users[2], '/images/x2hbccbl8.jpg', 'Public', callback);
        },
        function (callback) {
            imageCreate(users[2], '/images/i3ac8vcgxeg.jpg', 'Public', callback);
        }
    ],
        cb);
}


async.series([
    createUsers,
    createImages
],
    function (err, results) {
        if (err) {
            console.log('FINAL ERR: ' + err);
        }
        else {
            console.log('Images: ' + images);
        }
        mongoose.connection.close();
    });