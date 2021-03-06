/* const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
  userId: { type: String, required: true },
  likes: { type: Number },
  dislikes: { type: Number },
  usersLiked: { type: [String] },
  usersDisliked: { type: [String] },
  userRead: { type: [String] }
});

module.exports = mongoose.model('Post', postSchema); */

const db = require("../config/db.config");
const {Sequelize, DataTypes} = require("sequelize");

  const Post = db.define("post", {
    title: {
      type: DataTypes.STRING
    },
    userName: {
      type: DataTypes.STRING
    },

    department: {
      type: DataTypes.STRING
    },
    message: {
      type: DataTypes.STRING
    },
    media: {
      type: DataTypes.STRING
    },
    userId: {
      type: DataTypes.STRING
    },
    likes: {
      type: DataTypes.INTEGER
    },
    usersLiked: {
      type: DataTypes.STRING
    },
    usersRead: {
      type: DataTypes.STRING
    }
  });

  module.exports = Post;