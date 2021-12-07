const sql = require("mssql/msnodesqlv8");
const config = {
    server:"localhost",
    user: "sa",
    password: "123456",
    server: "DESKTOP-OT7KKUK",
    // server: "DESKTOP-I7P0VBM\\SQLEXPRESS",//An
    database: "dialy",
    driver:"msnodesqlv8",
    options: {
      trustedconnection: true,
      enableArithAbort: true,
      instancename: "",
    },
 
};

class HomeController {
    index(req, res) {
        console.log("dang index");
        res.render('home');
    }
    store(req, res) {
        console.log("dang store");
        sql.connect(config, function (err) {
    
            if (err) console.log(err);
    
            // create Request object
            var request = new sql.Request();
               
            // query to the database and get the records
            request.query('select * from HoDuongTinh', function (err, recordset) {
                
                if (err) console.log(err)
    
                // send records as a response
                console.log(recordset);
                res.json(recordset);
              
                
            });
        });
       
    }
    phongtoa(req, res){
        res.render('phongtoa');
    }


}
module.exports = new HomeController;