// const mongoose = require('mongoose');
// const slug = require('mongoose-slug-generator');
// const mongooseDelete = require('mongoose-delete');
// const Schema = mongoose.Schema;
// const AutoIncrement = require('mongoose-sequence')(mongoose);

// const Post = new Schema(
//     {
//         _id: { type: Number },
//         title: { type: String, minLength: 1, maxLength: 255 },
//         author: { type: String, maxLength: 600 },
//         image: { type: String, maxLength: 255 },
//         slug: { type: String, slug: 'title', unique: true },
//     },
//     {
//         _id: false,
//         timestamps: true,
//     },
// );

// // ---------- Libraries plugins support for MongoDB -------- //
// // Use mongoose-slug-generator to generate the slug on http request
// mongoose.plugin(slug);

// // Use mongoose-delete for soft delete of posts.
// Post.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });

// // Use mongoose-sequence to automatically increment the id of a schema.
// Post.plugin(AutoIncrement);

// // Customize query helpers
// Post.query.sortable = function (request) {
//     // Sort the posts based on types.
//     if (request.query.hasOwnProperty('_sort')) {
//         const isValidType = ['asc', 'desc'].includes(request.query.type);

//         return this.sort({
//             [request.query.column]: isValidType ? request.query.type : 'desc',
//         });
//     }

//     return this;
// };

// module.exports = mongoose.model('Post', Post);
