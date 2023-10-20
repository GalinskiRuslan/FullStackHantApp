const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "category",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      imageSrc: {
        type: DataTypes.STRING,
      },
      category_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "category",
    }
  );
};
