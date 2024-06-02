const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");
const Post = require("./Post");
const User = require("./User");

const Like = sequelize.define(
  "Like",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Post,
        key: "id",
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    tableName: "Likes",
    timestamps: false,
  }
);

module.exports = Like;
