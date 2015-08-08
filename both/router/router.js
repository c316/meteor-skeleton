Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'LoadingTemplate'
});

Router.plugin('ensureSignedIn', {
  except: ['home', 'signup', 'enrollAccount', 'forgotPwd', 'resetPwd', 'login']
});

Router.route('/', function () {
  this.render('Home');
}, {
  name: 'home'
});


Router.route('/signup', function () {
  this.render('Signup');
}, {
  name: 'signup'
});