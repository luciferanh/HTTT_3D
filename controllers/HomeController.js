class HomeController{
    index(req,res){
        res.render('home');
    }
    store(req,res){
            console.log('CCCCCCCCCCCCCCCCC');
        res.render('home');
    }
}
module.exports =new HomeController;