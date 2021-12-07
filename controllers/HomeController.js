const sql = require("mssql/msnodesqlv8");
const config = {
    server:"localhost",
    user: "sa",
    password: "123456",
    server: "DESKTOP-FLTD05G",
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
            console.log("Conection");  
            // query to the database and get the records
            request.query('select * from HoDuongTinh', function (err, recordset) {
                
                if (err) console.log(err)
    
                // send records as a response
                console.log(recordset);
                res.json(recordset);
              
                
            });
        });
       
    }


}
module.exports = new HomeController;