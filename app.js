//MONGODB PW: 0cAFfMs0Jn1bZw6O
//MONGODB CONNECTION: mongodb+srv://MadhushaniHewgama:<password>@cluster0-wxqbo.mongodb.net/test?retryWrites=true&w=majority
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const Thing = require('./models/thing');

mongoose.connect('mongodb+srv://MadhushaniHewgama:0cAFfMs0Jn1bZw6O@cluster0-wxqbo.mongodb.net/test?retryWrites=true&w=majority')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.post('/api/stuff', (req, res, next) => {
  const thing = new Thing({
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    userId: req.body.userId
  });
  thing.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
        
      });
      //console.log("success");
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
     // console.log("error::::"+error);
    }
  );
});




/*
app.use('/api/stuff', (req, res, next) => {
    const stuff = [
      {
        _id: 'oeihfzeoi',
        title: 'My first thing',
        description: 'All of the info about my first thing',
        imageUrl: 'http://tineye.com/images/widgets/mona.jpg',
        price: 4900,
        userId: 'qsomihvqios',
      },
      {
        _id: 'oeihfzeomoihi',
        title: 'My second thing',
        description: 'All of the info about my second thing',
        imageUrl: 'http://tineye.com/images/widgets/mona.jpg',
        price: 2900,
        userId: 'qsomihvqios',
      },
    ];
    res.status(200).json(stuff);
  });
*/
app.use('/api/stuff', (req, res, next) => {
  Thing.find().then(
    (things) => {
      res.status(200).json(things);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});


  app.get('/api/stuff/:id', (req, res, next) => {
    Thing.findOne({
      _id: req.params.id
    }).then(
      (thing) => {
        res.status(200).json(thing);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  });
  

  module.exports = app;