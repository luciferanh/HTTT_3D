const sql = require("mssql/msnodesqlv8");
const config = {
    server:"localhost",
    user: "sa",
    password: "123456",
    //server: "DESKTOP-OT7KKUK" ,
<<<<<<< HEAD
    server: "DESKTOP-FLTD05G" ,// An
=======
    server: "DESKTOP-I7P0VBM\\SQLEXPRESS" ,// An
>>>>>>> b85070ca9b24f618cfa6fed7078a0d6ad517b9cf
    database: "dialy",
    driver:"msnodesqlv8",
    options: {
      trustedconnection: true,
      enableArithAbort: true,
      instancename: "",
    },
 
};

 function getdataHoDuongTinh(){
    sql.connect(config, function (err) {
    
        if (err) console.log(err);
        console.log("Conection !!!")
        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from HoDuongTinh', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            
            return recordset;
            
        });
    });
}
  module.exports = {
    getdataHoDuongTinh: getdataHoDuongTinh,
  };
  
