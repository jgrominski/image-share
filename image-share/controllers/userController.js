const User = require("../models/user");
const Image = require("../models/image");

const async = require("async");

// Display detail page for a specific User.
exports.user_detail = async (req, res, next) => {
    const user = await User.findOne({ username: req.params.username });

    Image.find({ visibility: 'Public', user: user._id})
        .populate("user")
        .sort({ date: -1 })
        .exec(function (err, list_public_images) {
            if (err) {
                return next(err);
            }
            res.render("image_list", {
                title: "@" + req.params.username,
                header: "@" + req.params.username,
                image_list: list_public_images
            });
        });
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
