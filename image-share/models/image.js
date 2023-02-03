const mongoose = require("mongoose");
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    link: { type: String, required: true },
    description: { type: String, default: "", maxLength: 280 },
    date: { type: Date, default: Date.now },
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

ImageSchema.virtual("date_formatted").get(function () {
    return DateTime.fromJSDate(this.date).setLocale('en-gb').toLocaleString(DateTime.DATE_SHORT);
});

module.exports = mongoose.model("Image", ImageSchema);
