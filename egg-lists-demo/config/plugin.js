'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }


// };


exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};
exports.csrf = {
  enable: false,
};
