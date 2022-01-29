import {Sequelize} from 'sequelize';
require('dotenv').config();

const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`
// const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;
const proConfig = process.env.DATABASE_URL; //heroku addons

console.log(devConfig)
let sequelize;
if (process.env.NODE_ENV === 'production')
  sequelize = new Sequelize(devConfig, {define : {
    freezeTableName: true
  }});
else
  sequelize = new Sequelize(devConfig, {define : {
    freezeTableName: true
  }});


const testConnection =  async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    throw new Error('Unable to connect to the database');
  }
}

testConnection();

export default sequelize;
