const HomeRouter= require('./home.js');
function route(app){

        app.use('/',HomeRouter);
}
module.exports =route;