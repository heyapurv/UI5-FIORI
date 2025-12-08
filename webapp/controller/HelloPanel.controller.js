sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function (Controller, MessageToast) {
  "use strict";

  return Controller.extend("ui5.walkthrough.controller.HelloPanel", {
    onInit: function () {
      // optional view-level stuff
    },

    onShowHello: function () {
      MessageToast.show("hello world from message toast");
    },
    async onOpenDialog() {
      this.oDialog ??= await this.loadFragment({
        name: "ui5.walkthrough.view.HelloDialog"
      })
      this.oDialog.open()
    },
    onCloseDialog(){
      this.byId("helloDialog").close()
    }
  });
});
