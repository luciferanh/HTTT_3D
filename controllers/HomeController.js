const database = require('../config/database.js');
class HomeController {
    index(req, res) {
        console.log("dang index");
        res.render('home');
    }
    store(req, res) {
        console.log("dang store");
        database.getdataHoDuongTinh(res);
    }
    phongtoa(req, res){
        res.render('phongtoa');
    }


}
module.exports = new HomeController;