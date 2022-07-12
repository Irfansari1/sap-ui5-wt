sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller){
    "use strict"

    return Controller.extend("sap.ui.demo.walkthrough",{
        onShowHello : function () {
            //show a native or vanilla JS alert
            alert("Hello there!")
        }
    });
});