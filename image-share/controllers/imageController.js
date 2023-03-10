const Image = require("../models/image");

// Display list of all Images.
exports.image_list = (req, res, next) => {
    Image.find({ visibility: 'Public' })
        .populate("user")
        .sort({ date: -1 })
        .exec(function (err, list_public_images) {
            if (err) {
                return next(err);
            }
            res.render("image_list", {
                title: "Image Share Home",
                header: "Image Share",
                image_list: list_public_images
            });
        });
};

// Display detail page for a specific Image.
exports.image_detail = (req, res) => {
    Image.find({ _id: req.params.id })
        .populate("user")
        .sort({ date: -1 })
        .exec(function (err, list_public_images) {
            if (err) {
                return next(err);
            }
            res.render("image_list", {
                title: "Image Details",
                header: "Image Details",
                image_list: list_public_images
            });
        });
};

// Display Image create form on GET.
exports.image_create_get = (req, res) => {
    res.send("NOT IMPLEMENTED: Image create GET");
};

// Handle Image create on POST.
exports.image_create_post = (req, res) => {
    res.send("NOT IMPLEMENTED: Image create POST");
};

// Display Image delete form on GET.
exports.image_delete_get = (req, res) => {
    res.send("NOT IMPLEMENTED: Image delete GET");
};

// Handle Image delete on POST.
exports.image_delete_post = (req, res) => {
    res.send("NOT IMPLEMENTED: Image delete POST");
};

// Display Image update form on GET.
exports.image_update_get = (req, res) => {
    res.send("NOT IMPLEMENTED: Image update GET");
};

// Handle Image update on POST.
exports.image_update_post = (req, res) => {
    res.send("NOT IMPLEMENTED: Image update POST");
};
