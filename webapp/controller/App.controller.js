sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  function (Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough", {
      onInit : function () {
        //set the data Model on the view
        var oData = {
          recipient : {
            name: "Ui5"
          }
        };
        var oModel = new JSONModel(oData);
        this.getView().setModel(oModel);
      },
      
      onShowHello: function () {
        //show a native or vanilla JS alert
        //alert("Hello there!");
        MessageToast.show("Hello there!");
      },
    });
  }
);