sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], (Controller, MessageToast, JSONModel)=>{
  "use strict"
    
   return Controller.extend("ui5.walkthrough.controller.App", {
    onInit(){
       const data = new JSONModel({name: "apurvgore"})
       this.getView().setModel(data, "dataModel")
    },

    onShowHello(){
        // alert('Hello world')
 
        MessageToast.show("hello world from message toast")
    },


   })
})