const Task = require('../models/task.model');
const Employed = require('../models/employed.model');

const associations = () => {
  // Generate associations between task and employed
  Employed.hasMany(Task, {
    as: 'task',
    foreignKey: 'employedId',
  });

  Task.belongsTo(Employed, {
    as: 'employed',
    foreignKey: 'employedId',
  });
};

module.exports = { associations };
