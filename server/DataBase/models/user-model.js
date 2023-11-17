const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_surmane: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "user",
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      resume: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    }, 
    {
      timestamps: false,
      tableName: "users",
    }
  );
};
