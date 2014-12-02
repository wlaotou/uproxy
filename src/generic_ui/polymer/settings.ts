Polymer({
  logOut: function() {
    core.logout({name: ui.onlineNetwork.name,
                 userId: ui.onlineNetwork.userId}).then(() => {
      ui.view = UI.View.SPLASH;
      ui.setOfflineIcon();
    });
  },
  ready: function() {
    this.ui = ui;
  }
});
