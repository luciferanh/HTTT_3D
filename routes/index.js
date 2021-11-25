const HomeRouter= require('./web.js');
function route(app){

        app.use('/',HomeRouter);
        app.use('/store',HomeRouter);
        app.use('/login',HomeRouter);
   
}
module.exports =route;