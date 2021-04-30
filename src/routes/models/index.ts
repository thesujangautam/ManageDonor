import UserModel from "./user-model";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.DB_NAME || "db_name", 
process.env.DB_USERNAME ||"root",
process.env.DB_PASSWORD || "password",
  //"", 
  {
    host: "localhost",
    dialect: 'mysql',
    define: {
      timestamps: false
    }
  });
//.sync({ force : true})
const userModel = UserModel.init(sequelize);

export { userModel };
