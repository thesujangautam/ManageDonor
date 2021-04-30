import { DataTypes } from "sequelize";

export default class userModel extends require("sequelize").Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        firstname: {
          type: DataTypes.STRING(128),
          allowNull: false,
        },
        lastname: {
          type: DataTypes.STRING(128),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        phone: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        streetaddress: {
          type: DataTypes.STRING(128),
          allowNull: false,
        },
        city: {
          type: DataTypes.STRING(128),
          allowNull: false,
        },
        state: {
          type: DataTypes.STRING(2),
          allowNull: false,
        },
        country: {
          type: DataTypes.STRING(128),
          allowNull: false,
        },
        postalcode: {
          type: DataTypes.STRING(128),
          allowNull: false,
        },
        preferredContact: {
          type: DataTypes.STRING(128),
          allowNull: false,
        },
        preferredPayment: {
          type: DataTypes.STRING(128),
          allowNull: false,
        },
        frequency: {
          type: DataTypes.STRING(128),
          allowNull: false,
        },
        donationAmount: {
          type: DataTypes.STRING(128),
          allowNull: false,
        },
        comments: {
          type: DataTypes.STRING(128),
          allowNull: false,
        },
        createdAt: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        sequelize,
        tableName: "users",
      }
    );
  }
}
