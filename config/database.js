const sql = require("mssql/msnodesqlv8");
const configAnh = {
  server: "localhost",
  user: "sa",
  password: "123456",
  server: "DESKTOP-OT7KKUK",
  database: "dialy",
  driver: "msnodesqlv8",
  options: {
    trustedconnection: true,
    enableArithAbort: true,
    instancename: "",
  },

};
const configAn = {
  server: "localhost",
  user: "sa",
  password: "123456",
  server: "DESKTOP-I7P0VBM\\SQLEXPRESS",
  database: "dialy",
  driver: "msnodesqlv8",
  options: {
    trustedconnection: true,
    enableArithAbort: true,
    instancename: "",
  },

};

const configThanh = {
  server: "localhost",
  user: "sa",
  password: "123456",

  server: "DESKTOP-FLTD05G",
  database: "dialy",
  driver: "msnodesqlv8",
  options: {
    trustedconnection: true,
    enableArithAbort: true,
    instancename: "",
  },

};

function getdataHoDuongTinh(res) {
 
    
    sql.connect(configAnh, function (err) {

      if (err){
        console.log(err);
      } ;

      var request = new sql.Request();

      // query to the database and get the records
      request.query('select * from HoDuongTinh', function (err, recordset) {
   
        if (err) console.log(err)
        // send records as a response
       return  res.send(recordset);

      });
    });


}
module.exports = {
  getdataHoDuongTinh: getdataHoDuongTinh,
};

