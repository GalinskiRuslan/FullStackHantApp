const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "response_vacansy",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      data_time: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      resume: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      tableName: "response_vacansy",
    }
  );
};
