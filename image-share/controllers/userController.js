const User = require("../models/user");
const Image = require("../models/image");

const async = require("async");

exports.index = (req, res) => {
    async.parallel(
        {
            users_count(callback) {
                User.countDocuments({}, callback);
            },
            images_count(callback) {
                Image.countDocuments({}, callback);
            },
            public_images_count(callback) {
                Image.countDocuments({ visibility: "Public" }, callback);
            }
        },
        (err, results) => {
            res.render("index", {
                title: "Image Share Home",
                error: err,
                data: results,
            });
        }
    );
};

// Display list of all Users.
exports.user_list = (req, res, next) => {
    User.find()
        .sort([["username", "ascending"]])
        .exec(function (err, list_users) {
            if (err) {
                return next(err);
            }
            res.render("user_list", {
                title: "User List",
                user_list: list_users
            });
        });
};

// Display detail page for a specific User.
exports.user_detail = (req, res) => {
    res.send(`NOT IMPLEMENTED: User detail: ${req.params.username}`);
};

// Display User create form on GET.
exports.user_create_get = (req, res) => {
    res.send("NOT IMPLEMENTED: User create GET");
};

// Handle User create on POST.
exports.user_create_post = (req, res) => {
    res.send("NOT IMPLEMENTED: User create POST");
};

// Display User delete form on GET.
exports.user_delete_get = (req, res) => {
    res.send("NOT IMPLEMENTED: User delete GET");
};

// Handle User delete on POST.
exports.user_delete_post = (req, res) => {
    res.send("NOT IMPLEMENTED: User delete POST");
};

// Display User update form on GET.
exports.user_update_get = (req, res) => {
    res.send("NOT IMPLEMENTED: User update GET");
};

// Handle User update on POST.
exports.user_update_post = (req, res) => {
    res.send("NOT IMPLEMENTED: User update POST");
};
