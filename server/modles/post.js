const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Adjust path to your sequelize instance

const Post = sequelize.define('Post', {
  author: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Anonymous',
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  attachment: {
    type: DataTypes.STRING, // Stores the filename or URL of image
    allowNull: true,
  },
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  comments: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
}, {
  timestamps: true, // adds createdAt and updatedAt
});

module.exports = Post;
