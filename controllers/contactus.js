
const path = require('path');
const rootDir = require('../util/path');


 
 exports.getContactusControllers  = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
  };

 exports.postContactusController =( req, res, next) => {
    console.log(req.body);
    res.redirect('/success');
  }





