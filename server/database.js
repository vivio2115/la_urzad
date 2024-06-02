const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "db_los_angos_dc",
  "root",
  "dIpG01c_*ssaB0ai0A+EckjzzMGf@b9A75C1E@#Az",
  {
    host: "172.93.105.132",
    dialect: "mysql",
    define: {
      timestamps: false,
    },
  }
);

module.exports = sequelize;
