const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GifSchema = new Schema({
    type: { type: String, required: true },
    id: { type: String, required: true },
    url: { type: String, required: true },
    slug: { type: String },
    bitly_gif_url: { type: String },
    bitly_url: { type: String },
    embed_url: { type: String },
    username: { type: String },
    source: { type: String },
    title: { type: String },
    rating: { type: String },
    content_url: { type: String },
    source_tld: { type: String },
    source_post_url: { type: String },
    is_sticker: { type: Boolean },
    import_datetime: { type: Date },
    trending_datetime: { type: Date },
    images: {
        original: {
            height: { type: Number },
            width: { type: Number },
            size: { type: String },
            url: { type: String },
            mp4_size: { type: String },
            mp4: { type: String },
            webp_size: { type: String },
            webp: { type: String },
            frames: { type: String },
            hash: { type: String }
        },
        downsized: {
            height: { type: Number },
            width: { type: Number },
            size: { type: String },
            url: { type: String }
        },
    },
    user: {
        avatar_url: { type: String },
        banner_image: { type: String },
        banner_url: { type: String },
        profile_url: { type: String },
        username: { type: String },
        display_name: { type: String },
        description: { type: String },
        instagram_url: { type: String },
        website_url: { type: String },
        is_verified: { type: Boolean },
        suppress_chrome: { type: Boolean },
        is_public: { type: Boolean }
    },
    analytics_response_payload: { type: String },
    analytics: {
        onload: {
            url: { type: String }
        },
        onclick: {
            url: { type: String }
        },
        onsent: {
            url: { type: String }
        }
    },
    alt_text: { type: String },
    tags: { type: [String] },
    bottle_data: { type: Object },
    response_id: { type: String },
    is_anonymous: { type: Boolean },
    is_community: { type: Boolean },
    is_featured: { type: Boolean },
    is_hidden: { type: Boolean },
    is_indexable: { type: Boolean },
    is_preserve_size: { type: Boolean },
    is_realtime: { type: Boolean },
    is_removed: { type: Boolean },
    is_dynamic: { type: Boolean }
})

module.exports = mongoose.model("Gif", GifSchema);