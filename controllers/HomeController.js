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
    dataphongtoa(req, res) {
        console.log("dang dataphong");
        database.getdataPhongToa(res);
    }
    phongtoa(req, res){
       
        res.render('phongtoa');
    }
    check_khoang_cach(req, res){
        console.log("dang kc");
      console.log(req);
        database.tinhKC(res,req.query.x_new, req.query.y_new);
     
    }

}
module.exports = new HomeController;