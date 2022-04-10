const mongoose = require('mongoose');

const baseSchema = mongoose.Schema({
  idsAllowedToAccess: { type: [String], default: [] },
});

const Base = mongoose.model('Base', baseSchema);
module.exports = Base;
