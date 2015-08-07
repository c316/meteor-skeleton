Router.configure({
    loadingTemplate: 'LoadingTemplate'
});

Router.route('/', function () {
    this.render('Home');
});

Router.route('/login', function () {
    this.render('Login');
});

Router.route('/signup', function () {
    this.render('Signup');
});