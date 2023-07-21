const { Schema, model } = require('mongoose');

//Schema to create Reaction model.
const reactionSchema = new Schema(
    {
    readtionId: ,

    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
)

module.exports = Reaction;