const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "vacansy",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      vacansy_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      publicDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      skills: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      salary: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      expresion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "vacansy",
    }
  );
};
