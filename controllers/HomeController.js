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
    check_khoang_cach(req, res){
        console.log("check_khoang_cach");
        database.tinhKC(res,req.body.x_new,req.body.y_new);
     
    }

}
module.exports = new HomeController;