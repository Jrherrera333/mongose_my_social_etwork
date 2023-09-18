const { Schema, model } = require('mongoose');

// Schema to create User model
const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      age: Number,
      trim: true,
      required: 'Username is Required',
    },

    email: {
      type: String,
      unique: true,
      required: 'Username is Required',
      match: [/.+@.+\..+/],
    },


    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Users',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;
