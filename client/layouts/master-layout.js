Template.MasterLayout.events({
  'click #logout': function () {
    console.log("logging out");
    AccountsTemplates.logout();
  },
  'click #login': function () {
    console.log("show login");
    $('#loginForm' ).slideToggle();
  }
});