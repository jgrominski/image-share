const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    link: { type: String, required: true },
    visibility: {
        type: String,
        required: true,
        enum: ["Public", "Private"],
        default: "Private"
    }
});

ImageSchema.virtual("url").get(function () {
    return `/image/${this._id}`;
});

module.exports = mongoose.model("Image", ImageSchema);
