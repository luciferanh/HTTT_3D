class UserController {

    login(req, res) {
        res.render('user/auth');
    }
}
module.exports = new UserController;