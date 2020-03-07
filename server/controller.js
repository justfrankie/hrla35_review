const helper = require('../db/dbhelpers.js');

const controller = {
  students: {
    get: (req, res) => {
      helper.students.getStudent()
      .then((results) => {res.json(results)})
      .catch((err) => res.status(400).send("Error with getting ALL students"))
    },
    post: (req, res) => {
      let name = req.body.name;
      let imgurl = req.body.imgurl;
      // let {name, imgurl} = req.body
      helper.students.postName({name, imgurl})
      .then(() => res.status(200).send("student added"))
      .catch(err => res.status(400).send("Error posting student", err))
    },
    update: (req, res) => {
      let name = req.body.name;
      let id = req.params.id;
      helper.students.updateName({id}, {name})
      .then(() => res.status(200).send("Updated student!")) 
      .catch(err => res.status(400).send("Error posting student", err))
    }

  }
};

module.exports = controller