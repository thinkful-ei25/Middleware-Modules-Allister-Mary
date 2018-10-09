'use strict';

const data = require('../db/notes');
const simDB = require('../db/simDB');
const notes = simDB.initialize(data);

// GET Notes with search
notes.filter('government', (err, list) => {
  if (err) {
    console.error(err);
  }
  console.log(list);
});

// GET Notes by ID
notes.find(1005, (err, item) => {
  if (err) {
    console.error(err);
  }
  if (item) {
    console.log(item);
  } else {
    console.log('not found');
  }
});

// PUT (Update) Notes by ID
const updateObj = {
  title: 'New Title',
  content: 'Blah blah blah'
};

notes.update(1005, updateObj, (err, item) => {
  if (err) {
    console.error(err);
  }
  if (item) {
    console.log(item);
  } else {
    console.log('not found');
  }
});

const newObj2 = {
  
  title: 'New Title 2',
  content: 'Blah blah blah blah blah blah'
};

notes.create(newObj2, (err, item) => {
  if(err) {
    console.error(err);
  }
  if (item) {
    console.log(item);
  }
});

notes.delete(1010, (err, item) => {
  if(err) {
    console.error(err);
  }
  if (item) {
    console.log(notes);
  }

});