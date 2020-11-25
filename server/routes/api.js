const express = require('express');
const db = require('../models');
const { Word, Action, Difficulty, Arena } = db;
const router = express.Router();

module.exports = (fs) => {
  const dataPath = `${__dirname}/../data`

  // Associations between models (Note: Not to be confused with references between db tables in the migrations folder. The migrations  
  // handle how the database does things like cascading on delete, but these few lines of code make it possible for Sequelize to combine
  // tables. Just like how even if you've set up a database schema, when you do queries you still have to write JOIN on 
  Difficulty.hasMany(Arena);
  Arena.belongsTo(Difficulty);
  Action.hasMany(Word);
  Word.belongsTo(Action);
  Arena.hasMany(Word);
  Word.belongsTo(Arena);

  /* Placeholder for a future API GET. */
  router.get('/', function (req, res, next) {
    res.json({
      "message": "Hello world"
    });
  });

  router.get('/words-old', (req, res) => {
    fs.readFile(`${dataPath}/words.old.json`, 'utf8', (err, data) => {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });

  router.get('/words', async (req, res) => {
    const data = await Word.findAll({
      include: Action,
      attributes: ['Action.name', 'word'],
      raw: true
    });
    res.json(data);
  });

  router.get('/playerActions', (req, res) => {
    fs.readFile(`${dataPath}/playerActions.json`, 'utf8', (err, data) => {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });

  router.get('/arenas', (req, res) => {
    fs.readFile(`${dataPath}/arenas.json`, 'utf8', (err, data) => {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });


  return router;
}