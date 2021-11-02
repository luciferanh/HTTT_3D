class HomeController{
    index(req,res){
        res.render('home');
    }
    store(req,res){
            console.log(req.body);
        res.render('home');
    }
}
module.exports =new HomeController;