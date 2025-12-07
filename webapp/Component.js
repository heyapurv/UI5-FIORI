sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
  "use strict";
  return UIComponent.extend("ui5.walkthrough.Component", {
    metadata: {
      interfaces: ["sap.ui.core.IAsyncContentCreation"],
      // NOTE: rootView not rootview (camelCase)
       manifest: "json"
    },

    init: function () {
      UIComponent.prototype.init.apply(this, arguments);

      // i18n model
      var i18nModel = new ResourceModel({
        bundleName: "ui5.walkthrough.i18n.i18n"
      });
      this.setModel(i18nModel, "i18n");

      // sample JSON model
      var data = new JSONModel({ name: "apurvgore" });
      this.setModel(data, "dataModel");
    }
  });
});
