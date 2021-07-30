var express = require('express');
var router = express.Router();

const contacts = require('../models/contact_mdl').contacts;

router.get("/", (req, res, next) => {
    res.render("contact")
  })

  router.post("/", (req, res, next) => {
      const contact = new contacts();
      contact.Name = req.body.Name
      contact.Email = req.body.Email
      contact.Phone = req.body.Phone
      contact.Message = req.body.Message
      
      contact.save(err => {
        // if(err) throw err;
        if (err) {
          const errorArray = [];
          const errorKeys = Object.keys(err.errors);
          errorKeys.forEach(key => errorArray.push(err.errors[key].message));
          return res.render("/", {
            errors: errorArray
          });
        }
       
      });
      res.render("thankyoucontact",{
        name: contact.Name
      });

  })

module.exports = router