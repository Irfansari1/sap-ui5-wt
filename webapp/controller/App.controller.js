sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough", {
      onShowHello: function () {
        //show a native or vanilla JS alert
        //alert("Hello there!");
        MessageToast.show("Hellot there!")
      },
    });
  }
);