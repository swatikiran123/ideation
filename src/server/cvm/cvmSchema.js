var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var PersonSchema = new Schema({
    name    : String
  , age     : Number
  , stories : [{ type: Schema.ObjectId, ref: 'Story' }]
});
var StorySchema = new Schema({
    _creator : { type: Schema.ObjectId, ref: 'Person' }
  , title    : String
  , fans     : [{ type: Schema.ObjectId, ref: 'Person' }]
});
var Story  = mongoose.model('Story', StorySchema);
var Person = mongoose.model('Person', PersonSchema);

var aaron = new Person({name: 'Aaron', age: 100});
aaron.save(function (err) {
  if (err) throw err;

  var story1 = new Story({
      title: "A man who cooked Nintendo"
    , _creator: aaron._id
  });

  story1.save(function (err) {
    if (err) throw err;

    Person.findOne({name: "Aaron"}).populate('stories')
            .run(function (err, person) {
      if (err) throw err;
      console.log("person =", person);
      console.log("person.stories =", person.stories[0]);
    })

    Story.findOne({title: /Nintendo/i}).populate('_creator')
            .run(function (err, story) {
      if (err) throw err;
      console.log("story =", story);
    })
  });
});

// person = { stories: [ ],
//   _id: 4e566b7131ca6f2825000001,
//   age: 100,
//   name: 'Aaron' }
// person.stories = undefined
// story = { fans: [ ],
//   _id: 4e566b7131ca6f2825000002,
//   _creator:
//    { stories: [ ],
//      _id: 4e566b7131ca6f2825000001,
//      age: 100,
//      name: 'Aaron' },
//   title: 'A man who cooked Nintendo' }
Raw  mongoose.dbref.example2.js
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect("127.0.0.1", "mongoose_dbref", 27017);

var PersonSchema = new Schema({
    name    : String
  , age     : Number
  , stories : [{ type: Schema.ObjectId, ref: 'Story' }]
});
var StorySchema = new Schema({
    _creator : { type: Schema.ObjectId, ref: 'Person' }
  , title    : String
  , fans     : [{ type: Schema.ObjectId, ref: 'Person' }]
});
var Story  = mongoose.model('Story', StorySchema);
var Person = mongoose.model('Person', PersonSchema);

var aaron = new Person({name: 'Aaron', age: 100});
aaron.save(function (err) {
  if (err) throw err;

  var story1 = new Story({
      title: "A man who cooked Nintendo"
    , _creator: aaron._id
  });

  story1.save(function (err) {
    if (err) throw err;

    aaron.stories.push(story1._id);
    aaron.save(function (err) {
      if (err) throw err;

      Person.findOne({name: "Aaron"}).populate('stories')
              .run(function (err, person) {
        if (err) throw err;
        console.log("person =", person);
        console.log("person.stories =", person.stories[0]);
      })

      Story.findOne({title: /Nintendo/i}).populate('_creator')
              .run(function (err, story) {
        if (err) throw err;
        console.log("story =", story);
      });
    });
  });
});

// person = { stories: [ [object Object] ],
//   name: 'Aaron',
//   age: 100,
//   _id: 4e56698f15dff83410000001 }
// person.stories = { fans: [ ],
//   _id: 4e56698f15dff83410000002,
//   _creator: 4e56698f15dff83410000001,
//   title: 'A man who cooked Nintendo' }
// story = { fans: [ ],
//   _id: 4e56698f15dff83410000002,
//   _creator:
//    { stories: [ 4e56698f15dff83410000002 ],
//      name: 'Aaron',
//      age: 100,
//      _id: 4e56698f15dff83410000001 },
//   title: 'A man who cooked Nintendo' }