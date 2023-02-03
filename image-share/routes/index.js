const express = require("express");
const router = express.Router();

// Require controller modules.
const user_controller = require("../controllers/userController");
const image_controller = require("../controllers/imageController");

/// USER ROUTES ///

router.get("/user/create", user_controller.user_create_get);

router.post("/user/create", user_controller.user_create_post);

router.get("/user/@:username/delete", user_controller.user_delete_get);

router.post("/user/@:username/delete", user_controller.user_delete_post);

router.get("/user/@:username/update", user_controller.user_update_get);

router.post("/user/@:username/update", user_controller.user_update_post);

router.get("/user/@:username", user_controller.user_detail);

/// IMAGE ROUTES ///

router.get("/", image_controller.image_list);

router.get("/image/create", image_controller.image_create_get);

router.post("/image/create", image_controller.image_create_post);

router.get("/image/:id/delete", image_controller.image_delete_get);

router.post("/image/:id/delete", image_controller.image_delete_post);

router.get("/image/:id/update", image_controller.image_update_get);

router.post("/image/:id/update", image_controller.image_update_post);

router.get("/image/:id", image_controller.image_detail);

// Export router
module.exports = router;
