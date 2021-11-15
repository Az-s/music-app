const express = require('express');
const cors = require('cors');
const artists = require('./app/artists');
const albums = require('./app/albums');
const tracks = require('./app/tracks');
const mongoose = require('mongoose');
const exitHook = require('async-exit-hook');
const config = require('./config');
const history = require('./app/trackHistory');
const users = require('./app/users');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const port = 8000;

app.use('/artists', artists);
app.use('/albums', albums);
app.use('/tracks', tracks);
app.use('/users', users);
app.use('/tracks_history', history);

const run = async () => {
  await mongoose.connect(config.db.url);

  app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
  });

  exitHook(() => {
    console.log('exiting');
    mongoose.disconnect();
  });
};

run().catch(e => console.error(e));